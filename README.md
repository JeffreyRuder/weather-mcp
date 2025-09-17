# Weather MCP Server

A Model Context Protocol (MCP) server that provides current weather information by integrating
geocoding and weather data APIs. This project serves as an expanded example of an MCP server,
building on the examples shown in the
[official TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk). This project
shows a server in the context of TypeScript tooling.

## Features

- **Current Weather Service**: Combines geocoding and weather data fetching into a single MCP tool
- **Location Flexibility**: Supports city names with optional state and country parameters
- **Unit Preferences**: Automatically detects locale preferences or allows manual unit specification
- **TypeScript Tooling**: Includes build, linting, and type checking setup
- **MCP Compliance**: Implements the Model Context Protocol for seamless integration with MCP
  clients

## Architecture

This MCP server demonstrates several key concepts:

1. **Multi-API Integration**: The `currentWeather` function orchestrates two external API calls:

   - OpenWeatherMap Geocoding API to convert location names to coordinates
   - OpenWeatherMap Current Weather API to fetch weather data

2. **Smart Defaults**: Automatically determines preferred units based on system locale (imperial for
   US, metric for others)

3. **Error Handling**: Graceful error handling with JSON error responses

4. **TypeScript Best Practices**: Full TypeScript setup with strict linting rules and proper module
   resolution

## Installation

### Prerequisites

- Node.js >= 22
- npm >= 11
- OpenWeatherMap API key

### Setup

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd weather-mcp
   npm install
   ```

2. **Get an OpenWeatherMap API key:**

   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

3. **Build the project:**
   ```bash
   npm run build
   ```
   **Important**: You must run `npm run build` before using the server or after making any changes
   to the source code.

### Cursor Configuration

To use this MCP server with Cursor, add the following to your `mcp.json` configuration file:

```json
{
  "mcpServers": {
    "weather-mcp": {
      "command": "node",
      "args": ["/path/to/weather-mcp/dist/esm/server.js"],
      "env": {
        "OPEN_WEATHER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

Replace `/path/to/weather-mcp` with the actual path to your weather-mcp directory and add your
actual API key.

For more information, see [Cursor documentation](https://docs.cursor.com/en/context/mcp).

## Usage

The server provides one tool:

### `currentWeather`

Fetches current weather data for a given location.

## Development

### Available Scripts

- `npm run build`: Clean and build the project (types + ESM)
- `npm run clean`: Remove build artifacts
- `npm run typecheck`: Run TypeScript type checking

### Project Structure

```
src/
├── server.ts      # MCP server setup and tool registration
├── functions.ts   # Weather API integration logic
dist/
├── esm/           # Compiled JavaScript (ES modules)
└── types/         # TypeScript declaration files
```

### Code Quality

The project includes ESLint configuration with:

- TypeScript-specific rules
- Import/export practices
- Code style enforcement
- Error prevention rules

## Potential Improvements

### Better Cross-Platform Locale Detection

The current locale detection using `execSync('locale')` is Unix-specific and may not work reliably
or at all on Windows. Consider implementing a more robust cross-platform solution. Keep an eye on
how Intl API functions in Node.js

### Unit Testing

The project currently lacks unit tests. Consider adding:

- Unit tests for the `currentWeather` function
- Mock API responses for testing
- Error handling scenarios
- Edge cases (invalid cities, API failures)

### Additional Features

- Weather forecast functionality
- Historical weather data
- Multiple weather providers for redundancy
- Caching to reduce API calls
- More granular location support (coordinates, postal codes)

### OpenWeatherMap APIs Used

1. **Geocoding API**: `http://api.openweathermap.org/geo/1.0/direct`
2. **Current Weather API**: `https://api.openweathermap.org/data/2.5/weather`

Both APIs require the `OPEN_WEATHER_API_KEY` environment variable.

## Links

- [Model Context Protocol TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
