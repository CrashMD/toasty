const { Command } = require('discord.js-commando');
const generator = require('insult-compliment');

module.exports = class ComplimentMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'complimentme',
      group: 'fun',
      memberName: 'complimentme',
      description: 'Compliments you.',
      throttling: {
        usages: 2,
        duration: 3
      }
    });
  }

  run(msg) {
    let emojis = [':smile:', ':wink:', ':yum:', ':ok_hand:', ':blush:', ':innocent:', ':grinning:', ':stuck_out_tongue_winking_eye:'];
    msg.say(`**${msg.author.username}**, ${emojis[Math.floor(Math.random() * emojis.length)]} ${generator.Compliment()}`);
  }
};
