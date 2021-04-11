const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class SetCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'ladder',
        memberName: 'ladder',
        group: 'ladder',
        description: 'View the ladder',
        args: [
          {
            key: 'format',
            prompt: 'What format you want to view the ladder in',
            type: 'string',
            default: 'standard',
          },
        ],
    });
  }

  async run(message, { format }) {
    message.channel.send(`This is a test! This does nothing. Selected format: ${format}`);
  }
};