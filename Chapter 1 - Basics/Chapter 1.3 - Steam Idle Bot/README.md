# Chapter 1.3 - Steam Idle Bot

Now that you have installed Node.js and Atom, we can start coding

To start off this chapter, make a new folder on your pc and call it 'Chapter 1'.
Now download the the following files needed in Chapter 1.
- [index.js](../index.js)
- [config.json](../config.json)

First we will make a bot that is able to login to your steam account

You will need the following files:
- Index file called `index.js`, write the following inside the index.js file

```js
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const client = new SteamUser();
const config = require('./config.json');

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

After you coded the `index.js`, download the `package.json`, `install.bat` and `start.bat`.
The file `package.json` contains all the node modules you will need for this bot.
Once you double click `install.bat`, those node modules will be installed.
Now all you got to do is double click `start.bat` to start your bot.

If you get an error, checkout the troubleshooting section on the main README.
After you have given the 2FA code, which you will get from the steam mobile or desktop authenticator,
you should see the "Logged into Steam" message appear in your command line.

### Modules

At the top of the `index.js`, we see:

```js
const SteamUser = require('steam-user');
const client = new SteamUser();
const config = require('./config.json');
```

The `steam-user` is required here to run the steam bot.
This node module can be installed using `install.bat` and `package.json`.
Then a new instance named `client` with `new SteamUser()` is defined.
Last the `config.json` is required to get the username and password from that file.

### Methods

```js
client.logOn({
  accountName: config.username,
  password: config.username,
  twoFactorCode: SteamTotp.generateAuthCode(config.sharedsecret)
});
```

The username and password from the config file get passed to the `logOn` method of
our `client`, which is an instance of `SteamUser`. So basically,
we're telling our `SteamUser` instance to login to the Steam network using our
username and password.

### Events

We then proceed to adding an event listener.

```js
client.on('loggedOn', () => {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.Steam.EPersonaState.Online, 'Steam Bot');
  client.gamesPlayed(440);
});
```

The `on` method takes two parameters – an event name and a function. When the
`client` emits an event whose name matches the event name we have specified
in the `on` method, the function we provide will be executed.

When `client` emits an event called `loggedOn`, we tell it to execute a
function, defined in this case using an arrow function.
Inside of our function, we tell Node.js to log "Logged into
Steam" to our command line.

Then we set the state of the steam account to `Online` and change the steam profile name to `Steam Bot`
And finally we set the game to play to 440
- Team Fortress 2 = 440
- CS:GO = 730
It is possible to idle mutliple games at once, but we will get into that later.

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
