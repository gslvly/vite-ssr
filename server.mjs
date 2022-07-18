import express from 'express'
import fs from 'fs'
import vite from 'vite'
import serverStatic from 'serve-static'
import { resolve } from 'path'
const server = express()
const viteServer = await vite.createServer({
  root: resolve('./'),
  logLevel: 'error',
  server: {
    middlewareMode: 'ssr',
    watch: {
      // During tests we edit the files too fast and sometimes chokidar
      // misses change events, so enforce polling for consistency
      usePolling: true,
      interval: 100,
    },
  },
})
// use vite's connect instance as middleware
server.use(viteServer.middlewares)

server.use('*', async (req, res) => {
  const url = req.originalUrl
  // always read fresh template in dev


  const render = (await viteServer.ssrLoadModule('./src/entry-server.ts')).render
  const ctx= {}
  const [appHtml] = await render(url, {},ctx)
  console.log(ctx)

  let template = fs.readFileSync(resolve('index.html'), 'utf-8')
  console.log(template)
  template = await viteServer.transformIndexHtml(url, template)

  template= template.replace(/(?<=<title>).*(?=<\/title>)/,ctx.title)
  const html = template.replace('<!--app-html-->', appHtml)
  pipeToNodeWritable(server, ctx, res)
  // res.set({ 'Content-Type': 'text/html' }).end(html)
})

server.listen(9000)
