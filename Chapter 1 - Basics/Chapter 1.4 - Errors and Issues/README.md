# Chapter 1.5 - Errors and Issues

When coding a new project, I often get across errors, and it sometimes takes long to solve them but some might be fixed in just 5 minutes.

If you receive random Steam issues, checkout the huge list of Steam error codes
at [steamerrors.com](https://steamerrors.com).

### "Cannot find module: THE_MODULE_NAME"

If you get this error, you have most likely installed the given module
incorrectly. Try reinstalling it by typing `npm install THE_MODULE_NAME` again.
Or try to delete the node_modules folder inside your steam bot folder and then try to use `install.bat` again.

### "Error: InvalidPassword"

This means you have entered an incorrect `accountName` or `password` in the `config.js`
Try re-entering them and make sure they work when logging into steam.

This error can also be caused by passing in a `twoFactorCode` when your bot does
not have 2FA enabled.

### Contact me

If you have any other issues or question, I am here to help you!
Make sure to send me a message on:
- Discord: Burn1ng Br1ght#4827
- [Steam](https://steamcommunity.com/id/burn1ngbr1ght/)
