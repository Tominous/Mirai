![Mirai Bot](http://i.imgur.com/BO18mRW.png)   
[![David](https://img.shields.io/david/brussell98/Mirai.svg?maxAge=2592000)](https://david-dm.org/brussell98/Mirai) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/brussell98/Mirai/master/LICENSE) [![Code Climate](https://codeclimate.com/github/brussell98/Mirai/badges/gpa.svg)](https://codeclimate.com/github/brussell98/Mirai)

A powerful Discord bot core using [Eris](https://github.com/abalabahaha/eris/). At least NodeJS v6 *Argon* is **REQUIRED**

> By using this you agree to not ask any questions unless you have a basic understanding of installing programs, running node applications, and developing JavaScript applications.

#### [Website](http://mirai.brussell.me) | [Support my projects on Patreon](http://patreon.com/brussell98) | [Documentation](http://brussell.me/Mirai/index.html) | [Discord Server](https://discord.gg/rkWPSdu) | [Eris Docs](https://abal.moe/Eris/docs/index.html) | [Todo List](https://trello.com/b/Uw5wZLzJ)   

## Installing:
```
npm i -S mirai-bot-core
```
```js
const Mirai = require('mirai-bot-core'),
      bot = new Mirai(config);
```
Add your bot to a server using `https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot`.

## Abstract Classes:
Abstract classes are provided to ensure you have the required methods. They can be accessed like so:
```js
const AbstractCommand = require('mirai-bot-core/lib/Base/AbstractCommand');

class PingCommand extends AbstractCommand {
	
}
```
