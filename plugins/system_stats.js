/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    await message.sendMessage(
        '```☠️𝙽𝚗𝚞 𝙱𝚊𝚝𝚑𝚒𝚔𝚎𝚢 𝚞𝚗𝚗𝚊𝚗𝚞 𝚁𝚊.🤗🤭```\n\n*Version:* ```'+Config.VERSION+'```\n*Telegram Group:* https://t.me/thunder_mirror_group\n*Youtube channel:* https://youtube.com/Beginnershub' , MessageType.text
    );
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
