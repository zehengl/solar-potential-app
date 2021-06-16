import fetch from 'node-fetch'

export const getSolar = async ({ address }) => {
  const response = await fetch(
    `https://data.calgary.ca/resource/k85e-i265.json?address=${address}`
  )
  const json = await response.json()

  if (json.length === 0) {
    return new Error(
      `Sorry. No solar potential data can be found for ${decodeURIComponent(
        address
      )}.`
    )
  }

  const sum = (prev, next) => prev + next

  return {
    address: decodeURIComponent(address),
    number_of_panels: json
      .map((item) => parseFloat(item.number_of_panels))
      .reduce(sum),
    ac_annually: json
      .map((item) => parseFloat(item.ac_annually_per_panel))
      .reduce(sum),
    area: json.map((item) => parseFloat(item.area)).reduce(sum),
  }
}
