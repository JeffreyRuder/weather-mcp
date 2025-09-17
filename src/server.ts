import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

import { currentWeather } from './functions.js'

// Create an MCP server
const server = new McpServer({
  name: 'weather-mcp',
  version: '1.0.0',
})

/**
 * Current Weather Tool
 *
 * Given a location, and optionally preferred units, return the current weather.
 *
 * The response is a JSON object with the weather data.
 *
 * The most important fields are:
 * - main.temp: the temperature in the preferred units (Celsius if metric, Fahrenheit if imperial, Kelvin if standard)
 * - main.feels_like: the feels-like temperature in the preferred units
 * - main.humidity: the humidity as a percentage
 * - main.pressure: the pressure in the preferred units (always in hPa)
 * - main.wind_speed: the wind speed in the preferred units (meters per second if metric or standard, miles per hour if imperial)
 * - main.wind_deg: the wind direction in degrees (the direction the wind is blowing from, so 90 would be "out of the east" or "from the east")
 * - clouds.all: the cloud coverage as a percentage
 *
 * There may be rain or snow fields representing precipitation rate in millimeters per hour (regardless of preferred units)
 *
 */
server.registerTool(
  'currentWeather',
  {
    title: 'Current Weather Tool',
    description: 'Given a latitude and longitude, return the current weather',
    inputSchema: {
      city: z.string(),
      state: z.string().optional(),
      country: z.string().optional(),
      preferredUnits: z.enum(['metric', 'imperial', 'standard']).optional(),
    },
  },
  async ({ city, state, country, preferredUnits }) => ({
    content: [{ type: 'text', text: await currentWeather(city, state, country, preferredUnits) }],
  }),
)

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()
await server.connect(transport)
