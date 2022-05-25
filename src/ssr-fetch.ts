const fetchs: Fn[] = []
type Fn = () => unknown
export const asyncFetch = (fn: Fn) => {
  fetchs.push(fn)
}

export const ssrFetch = async () => {
  console.log(import.meta.env.SSR, fetchs.length)
  await Promise.allSettled(fetchs)
  fetchs.length = 0
}
