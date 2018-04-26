# Chapter 1.3 - Steam Idle Bot

In the first project we will make a bot that is able to:
- Login to your steam account
- Idle a steam game
- Change your steam profile name

To start off this chapter, make a new folder on your pc and call it 'Chapter 1'.

Now download the the following files needed and place them in the folder `Chapter 1` on your pc.
- [index.js](../index.js)
- [config.json](../config.json)
- [package.json](../package.json)
- [start.bat](../start.bat)
- [install.bat](../install.bat)

## Index

The file called `index.js`, can be split into two parts:

#### Node Modules
At the very top of the file the node modules are called. Those can be used everywhere throughout the `index.js` file.

```js
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const client = new SteamUser();
const config = require('./config.json');
```

#### Functions
The function used in this bot let the user login using a username, password and shared_secret.
The twoFactorCode is generated using the shared secret.

```js
client.logOn({
  accountName: config.username, // Your steam username
  password: config.password, // Your steam password
  twoFactorCode: SteamTotp.generateAuthCode(config.sharedsecret) // Your sda shared secret
});

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online, 'Steam Bot');  // Steam profile set to online and steam name to Steam Bot
  client.gamesPlayed(440);  // 440 (Team Fortress 2), 730 (CS:GO)
});
```
Then we set the state of the steam account to `Online` and change the steam profile name to `Steam Bot`
And finally we set the game to play to 440
- Team Fortress 2 = 440
- CS:GO = 730
It is possible to idle mutliple games at once, but we will get into that later.

## Config

The username, password and shared secret can be filled into the `config.js` file.

```js
{
	"username": "",
	"password": "",
	"shared_secret": ""
}
```

## Setup
Once you double click `install.bat`, the node modules will be installed.
Now all you got to do is double click `start.bat` to start your bot.

If you get an error, checkout the troubleshooting section on the main README.
After you have given the 2FA code, which you will get from the steam mobile or desktop authenticator,
you should see the "Logged into Steam" message appear in your command line.

## How To Find Your Secrets

If you want to find your sharedsecret from your phone, use the following:
- For iPhones use [this](http://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/) method
- For Android Phones use [this](https://www.reddit.com/r/SteamBot/comments/3w5zwb/info_get_your_2fa_codes_from_android_no_root/)
method.

Your shared secret is used to generate your 2FA code.
Your identity secret is for trade and market confirmations.

We will use the identity secret later on when it becomes
necessary. Remember to never share these secrets with anyone as they could
easily sabotage your account.

[Continue Reading](../Chapter%201.4%20-%20Errors%20and%20Issues)
