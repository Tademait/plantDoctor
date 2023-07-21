# setup process

> Note: You can also the follow the guide on the Expo website: https://docs.expo.dev/get-started/installation/

First of all, you need to install node.js and either the npm or yarn package manager. (npm is recommended).For example on Ubuntu:
```
sudo apt install nodejs
```
> Note: `npm` should be bundled together with node.js

After that, go to the root of the project and run:
```
npm install
```
or
```
yarn install
```
This will install all the required dependencies.
The easiest way to setup and preview this project on your mobile device is to use the Expo development environment and Expo Go application which you can download from the Google Play Store or the Apple App Store. 

After installing Expo Go, you can run the project by running:
```
npx expo start
```
this command will start the development server and show a QR code in the console, which you can scan with the Expo Go application to run the project on your device.

Optionally, you may want to run the project on an Android emulator. To do this, you need to install the Android Studio and the Android SDK. In that case, follow the instructions on the Expo website: https://docs.expo.io/workflow/android-studio-emulator/

## possible issues:

In case you get an error saying the Android SDK couldn't be found, you need to run the app specifying the ANDROID_HOME environment variable to the path of the Android SDK. For example:
```
ANDROID_HOME=/home/user/Android/Sdk npx expo start
```
or
```
export ANDROID_HOME=/home/user/Android/Sdk
npx expo start
```

## Personal dev environment setup
If you are hosting your own backend and database, you can change the API connection string in the `constants.js` file.
The connection should be HTTPS and signed by trusted CA. If hosting a custom server, you can achieve that using `certbot` via Let's Encrypt. 


# apk installer building process

To build the apk installer in cloud using Expo EAS (Expo Application Service) you need to install the eas-cli and login to your Expo account:

```
npm install -g eas-cli
eas login
eas whoami
eas build:configure
change eas.json settings:
    under "preview" add:
        "android": {buildType: "apk"}
eas build -p android --profile preview
```

# Credits
Base look of logo provided using CoreUI Icons by IconDuck
Data about plant diseases provided by PlantVillage https://plantvillage.psu.edu/plants

# Screenshots
![screen1](https://imgur.com/Xy3LasT)
![screen2](https://imgur.com/a/PtMIxPq)
