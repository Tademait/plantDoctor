# building process

npm install -g eas-cli
eas login
eas whoami
eas build:configure
change eas.json settings:
    under "preview" add:
        "android": {buildType: "apk"}
eas build -p android --profile preview
                                          