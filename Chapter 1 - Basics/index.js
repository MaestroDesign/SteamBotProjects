const SteamUser = require('steam-user');
const client = new SteamUser();
const config = require('./config.json');

client.logOn({
  accountName: config.username,
  password: config.password,
  twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
});

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed(440);
});
