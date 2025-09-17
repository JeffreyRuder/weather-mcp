import { execSync } from 'child_process'

const API_KEY = process.env.OPEN_WEATHER_API_KEY

const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url)
  return await response.text()
}

const geocode = async (city: string, state?: string, country?: string) => {
  try {
    const queryParts = [city, state, country].filter(part => !!part)
    const query = encodeURIComponent(queryParts.join(','))

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`
    return await fetchData(url)
  } catch (error) {
    return JSON.stringify(error)
  }
}

const determinePreferredUnits = () => {
  // TODO will this work on windows
  const locale = execSync('locale').toString().trim()
  return locale.includes('en_US') ? 'imperial' : 'metric'
}

export const currentWeather = async (
  city: string,
  state?: string,
  country?: string,
  preferredUnits?: 'metric' | 'imperial' | 'standard' | undefined,
) => {
  try {
    preferredUnits = preferredUnits ?? determinePreferredUnits()
    const { lat, lon } = JSON.parse(await geocode(city, state, country))[0]
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${preferredUnits}`
    return await fetchData(url)
  } catch (error) {
    return JSON.stringify(error)
  }
}
