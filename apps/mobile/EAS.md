To build and deploy to EAS, you need to have an EAS account and have the EAS CLI installed.

Run `eas login` to login to your EAS account.

Run `eas build --platform android` to build the app for Android.
Run `eas build --platform ios` to build the app for iOS.

If EAS Build fails with react-native-gesture-handler kotlin compile errors, try this

- Open package.json
- Change the version of react-native-gesture-handler to 2.5.0
- Run the build command
- Revert change to use emulator

The issue was fixed upstream in 2.5.0 but 2.5.0 is not compatible with this version of Expo.

A PNPM patch has been applied which enables you to use custom dev clients but EAS does not seem to apply this patch.
