# AGENTS.md

## Cursor Cloud specific instructions

This is a **React Native 0.62.2** weather app ("application_tempo") targeting Android and iOS. It fetches weather data from the AccuWeather API.

### Node.js version

This project requires **Node.js 14** (v14.21.3). The current `node_modules` and lockfile are incompatible with Node.js 18+. Use `nvm use 14` before running any commands.

### Key commands

| Task | Command |
|---|---|
| Install deps | `yarn install` |
| Lint | `yarn lint` |
| Test | `yarn test` |
| Metro bundler | `yarn start` (or `npx react-native start`) |

### Known issues

- **Jest tests fail** due to a pre-existing issue: `react-native-vector-icons` calls `Icon.loadFont()` at module level in `src/pages/Dashboard/index.js`, and there is no Jest mock for the native module. The test suite has never had mocks configured (`__mocks__/` directory does not exist).
- The AccuWeather API key is **hardcoded** in `src/pages/Dashboard/index.js` — no `.env` file or environment variable management exists.

### Cloud VM limitations

- No Android SDK, emulators, or iOS simulators are available. The app cannot be fully built or run on-device in this environment.
- Development work is limited to: JS editing, linting, testing (with the native module caveat above), and Metro bundler verification.
- Metro bundler runs on port 8081 and can serve JS bundles for verification via `http://localhost:8081/index.bundle?platform=android&dev=true&minify=false`.
