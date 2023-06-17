# Afrigives

Afrigives is a platform that connects donors to fictive charities in
Africa in cash and kind.

## Download

[Play Store](https://play.google.com/store/apps/details?id=com.afrigives)

[App Store](https://apps.apple.com/us/app/afrigives/id1581362020)

## Repo Structure

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ mobile
  |   ├─ Expo SDK 44
  |   ├─ React Native using React 17
  |   └─ Navigation using React Navigation 6
  └─ web
      ├─ Next.js 12
      ├─ React 17
      └─ Tailwind CSS
packages
 └─  config
     └─ eslint
        └─ eslint config for React Native and Next.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

### Development

1. Install dependencies

   ```sh
   pnpm install
   ```

2 Setup environment variables

```sh
cp .env.example .env
```

Replace the values in `.env` with your own.

3. Start the development servers for the mobile and web apps.

   ```sh
    pnpm dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the web application. The iOS simulator should open automatically. If it doesn't, run `expo start` in the `apps/mobile` directory.
