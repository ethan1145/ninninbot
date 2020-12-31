const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzk0MDI4NjUzMTcxMTc5NTMw.X-02zw.pZ_QBs7PG0CrEqc8thx2HFkbo5M';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === '닌닌아') {
        message.reply('네? 부르셨나요?')
    }
});


client.on('message', (message) => {
    if(message.content === '닌닌아 도움말') {
        message.reply('개발중입니다!')
    }
});


client.on('message', (message) => {
    if(message.content === '닌닌아 핑') {
        message.reply('퐁')
    }
});


client.on('message', (message) => {
    if(message.content === '닌닌아 잠수') {
        message.reply('님이 잠수가되셨습니다!')
    }
});
client.on('message', (message) => {
    if(message.content === '닌닌아 잠수끝') {
        message.reply('님이 잠수에서깨어나셨습니다!')
    }
});


client.on('message', (message) => {
    if(message.content === '닌닌아 심심해') {
        message.reply('로블록스하세요')
    }
});

client.login(token);