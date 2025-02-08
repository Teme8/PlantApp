# PlantApp

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Download repository

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Description

This is a React Native app that you can use to add a new plant by taking a photo with the camera, providing a name, and optionally adding notes. After adding plants
they will be shown in the Home page in a list. You can also edit/view specific plant information by clicking on it. Additionally there is templates for Profile and
Settings pages. 

# Technologies used

State management/data storage: React Redux
User interface is pretty simple but functional and uses components from React Native library

## Navigation

There is a bottom navigation bar that has 3 tabs Home, Profile and Settings.

![plot](../PlantApp/assets/images/navigation.png)

## Home view

Home page shows all plants in a list

![plot](../PlantApp/assets/images/home.png)

## Scan view

View for adding new plants

Before taking a photo
![plot](../PlantApp/assets/images/add_2.png)

After taking a photo
![plot](../PlantApp/assets/images/add.png)

## Detail view

View for editing/viewing plant information

![plot](../PlantApp/assets/images/detail.png)
