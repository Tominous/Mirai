var fs = require('fs'),
	AbstractCommandPlugin = require('../../../lib/base/AbstractCommandPlugin');

class GeneralCommands extends AbstractCommandPlugin {
	constructor() {
		super();
		this.commands = {}
	}

	get name() {
		return 'general';
	}

	get help() {
		return 'General: ' + Object.keys(this.commands).join(', ');
	}

	load(bot) {
		return new Promise((resolve, reject) => {
			super.load(bot);
			fs.readdir(__dirname + '/general/', (error, files) => {
				if (error)
					return reject(error);
				for (let file of files) {
					try {
						if (!file.endsWith('.js'))
							continue;
						let command = new (require(__dirname + '/general/' + file))();
						command.load(this).then(command => {
							this.commands[command.name] = command;
						});
					} catch (e) {
						this.logger.error(`Error loading ${file}: ${e.stack}`);
					}
				}
				resolve();
			});
		});
	}

	destroy() {
		super.destroy();
		return Promise.all(Object.keys(this.commands).map(c => this.commands[c].destroy()));
	}

	handle(message) {
		if (message.content.startsWith('m.')) {
			let command = message.content.substr(2);
			for (let name in this.commands) {
				if (command.startsWith(name))
					return this.commands[name].handle(message, command.replace(name, '').trim());
			}
		}
	}
}

module.exports = GeneralCommands;
