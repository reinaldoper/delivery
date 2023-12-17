const url = 'https://api.punkapi.com/v2/beers'

export const apiCervejas = async () => {
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export const apiByIdCervejas = async (id: number) => {
  const response = await fetch(`${url}/${id}`)
  const result = await response.json()
  return result
}