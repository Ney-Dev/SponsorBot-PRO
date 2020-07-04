module.exports.run = (client, message) => {
    message.channel.send(`Pong ! :ping_pong:`).then(m => m.edit(`Pong ! :ping_pong: **(${client.ws.ping} ms)**`))
  };
  
  module.exports.help = {
    name: "ping",
    aliases: ['ping'],
    category: 'utilitaires',
    description: "Renvoie la latence en milliseconde entre le serveur et Discord.",
  };