const fetchs: Fn[] = []
type Fn = () => unknown
export const asyncFetch = (fn: Fn) => {
  fetchs.push(fn)
}

export const ssrFetch = async () => {
  await Promise.allSettled(fetchs)
  fetchs.length = 0
}
