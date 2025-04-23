# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with 
```bash
npx create-expo-app@latest
```

## Get started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npm start
```

   This will start the Expo CLI and open a new tab in your default web browser. You can then run the app on an Android (AndroidStudio) or iOS simulator (XCode), or on a physical device using the Expo Go app.


----------

## Create Prebuilds
To create a prebuild, run the following command in your project directory:

```bash
npx expo prebuild
```

This will generate the native iOS and Android directories in your project, allowing you to customize the native code if needed.

## To create new prebuilds, run the following command:

```bash
npx expo prebuild --clean
```

## Run the app on iOS and Android
If you make a prebuild, to run the app on iOS and Android, use the following commands:

```bash
npx expo run:ios
npx expo run:android
```

This will build the app for iOS and Android, respectively, and run it on the simulator or connected device. This also will create the app bundle for iOS and Android, it will be created in the `ios/build` and `android/app/build/outputs/apk/debug` directories, respectively.

## Create release builds
To create a release build for iOS and Android, run the following commands:

```bash
npx expo run:ios --configuration Release
npx expo run:android --variant release
```

or you can use gradle to create a release build for Android:

```bash
cd android
./gradlew assembleRelease
```
This will create a release build of the app for iOS and Android, respectively.
