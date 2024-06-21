# Getting Started 

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: clone the project
```bash
# using npm
git clone "project link"
```

## Step 2: install dependencies
```bash
# using npm
npm install
```

## Step 3: Run Android and Ios builds 
```bash
# using npm
npm run android 
npm run ios
```

## Step 4: Start the Metro Server (Make sure your emulator is running)
```bash
# using npm
npm start
```

## Project Tree
```bash
📦 
├─ .bundle
│  └─ config
├─ .env
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.js
├─ .watchmanconfig
├─ .yarn
│  └─ releases
│     └─ yarn-3.6.4.cjs
├─ .yarnrc.yml
├─ App.tsx
├─ Gemfile
├─ README.md
├─ __tests__
│  └─ App.test.tsx
├─ android
│  ├─ app
│  │  ├─ build.gradle
│  │  ├─ debug.keystore
│  │  ├─ google-services.json
│  │  ├─ proguard-rules.pro
│  │  └─ src
│  │     ├─ debug
│  │     │  └─ AndroidManifest.xml
│  │     └─ main
│  │        ├─ AndroidManifest.xml
│  │        ├─ java
│  │        │  └─ com
│  │        │     └─ lendsqrfrnews
│  │        │        ├─ MainActivity.kt
│  │        │        └─ MainApplication.kt
│  │        └─ res
│  │           ├─ drawable
│  │           │  └─ rn_edit_text_material.xml
│  │           ├─ mipmap-hdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-mdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ values
│  │           │  ├─ strings.xml
│  │           │  └─ styles.xml
│  │           └─ xml
│  │              └─ registration.xml
│  ├─ build.gradle
│  ├─ gradle.properties
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  └─ settings.gradle
├─ app.json
├─ babel.config.js
├─ config
│  └─ firebase.ts
├─ context
│  └─ MainContext.tsx
├─ declaration.d.ts
├─ env.d.ts
├─ firebase
│  ├─ user.ts
│  └─ utils.ts
├─ index.js
├─ ios
│  ├─ .xcode.env
│  ├─ LendsqrFrNews.xcodeproj
│  │  ├─ project.pbxproj
│  │  └─ xcshareddata
│  │     └─ xcschemes
│  │        └─ LendsqrFrNews.xcscheme
│  ├─ LendsqrFrNews
│  │  ├─ AppDelegate.h
│  │  ├─ AppDelegate.mm
│  │  ├─ Images.xcassets
│  │  │  ├─ AppIcon.appiconset
│  │  │  │  └─ Contents.json
│  │  │  └─ Contents.json
│  │  ├─ Info.plist
│  │  ├─ LaunchScreen.storyboard
│  │  ├─ PrivacyInfo.xcprivacy
│  │  └─ main.m
│  ├─ LendsqrFrNewsTests
│  │  ├─ Info.plist
│  │  └─ LendsqrFrNewsTests.m
│  └─ Podfile
├─ jest.config.js
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ assets
│  │  ├─ HeroIllustration.svg
│  │  ├─ Lend_Logo.png
│  │  ├─ Lend_Logo.svg
│  │  ├─ chevron_left.svg
│  │  ├─ home.png
│  │  └─ icons8-google.svg
│  ├─ common
│  │  ├─ constants.ts
│  │  ├─ helpers.ts
│  │  └─ types.ts
│  ├─ components
│  │  ├─ back-button.tsx
│  │  ├─ hideKeyboard.tsx
│  │  ├─ news-card-component.tsx
│  │  └─ separator.tsx
│  ├─ middleware
│  │  └─ logger.ts
│  ├─ navigation
│  │  ├─ app-navigation.tsx
│  │  ├─ auth-navigation.tsx
│  │  ├─ main-navigation.tsx
│  │  └─ root-navigation.tsx
│  ├─ screens
│  │  ├─ app
│  │  │  ├─ loading-screen.tsx
│  │  │  ├─ news-details.tsx
│  │  │  └─ news-listing-screen.tsx
│  │  └─ auth
│  │     ├─ get-started-screen.tsx
│  │     ├─ log-in-screen.tsx
│  │     ├─ sign-up-google.tsx
│  │     └─ sign-up-screen.tsx
│  └─ store
│     ├─ news-slice.ts
│     └─ store.ts
├─ tsconfig.json
└─ yarn.lock
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

