// -- Déclaration des modules requis
const 
{ Client, MessageEmbed } = require("discord.js"),
 figlet = require('figlet'),
 colors = require('colors'),
 readline = require('readline');
 // -- Variable pour compter le nombre de message envoyé
var 
reuissie = 0,
echouer = 0,
total = 0,
pub = "";

// -- Exporte les élèments requis
module.exports.run = (client, message, args) => {  

// -- Vérifie si la variable args contient un token
if(args) { 
     // -- Déclare le token
    var token = args.join(" ");
    // -- Lance un nouveau Client discord via le Token
    var bot = new Client({fetchAllMembers: true})
  
// -- Lorsque le bot est ready
bot.on("ready", () => {
// -- Définis la variable pour compter a 0
count = 0 
// -- Crée un nouveau embed et l'envoie
var embed = new MessageEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL())
.setTitle(`**Choisissez un serveur pour votre publicité`)
.setDescription(bot.guilds.cache.map(p => `${count++}. - **${p.name}** (${p.memberCount}) - \`${p.id}\` \n`).join(" ") + `

[Cliquez ici pour inviter le bot sur un serveur](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=0&scope=bot)`)
.setFooter(`Vous avez 2 minutes pour choisir un serveur.
BotID: ${bot.user.id}`);
message.channel.send(embed)

// -- Filtre les réponses par le créateur du message
var filter = response => {
  return response.author.id === message.author.id;
  }

// -- Créateur d'un détecteur de message
message.channel.awaitMessages(filter, {max: 1, time: 120000}).then(collected => {
  // -- Déclare la variable "guild" en tentant d'obtenir la guilde via l'ID
 var guild = bot.guilds.cache.get(collected.first().content)

 // -- Vérifie si la guilde est existante
 if(guild) {

  // -- Crée une variable pour l'embed
  var embed = new MessageEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL())
  .setTitle(`Entrez votre message de publicité pour le serveur ${guild.name}`, guild.iconURL())
 .setFooter(`Vous avez 5 minutes pour entrer un message de publicité.`);
  message.channel.send(embed)

  // -- Crée un nouveau collecteur de message 
  message.channel.awaitMessages(filter, {max: 1, time: 300000}).then(collected => {
    // -- Définis le message de pub
    pub = collected.first().content

    // -- Crée un embed et l'envoie
    var embed = new MessageEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setTitle(`:white_check_mark: Publicité sur ${guild.name} démarrée`, guild.iconURL())
    .setDescription(`Il y a ${guild.members.cache.filter(b => !b.user.bot).size} membres qui ne sont pas des bots et qui peuvent potentiellement la recevoir`)
    .setFooter(`Appuyez sur la croix pour annuler l'opération`);
    message.channel.send(embed).then(m => { 
      // Lorsque le message a été envoyé, réagis la réaction :x:
      m.react(`❌`)
      // -- Vérifie si l'auteur a réagis.
      message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), { max: 1, time: 5000000 }).then(collected => {
        if (collected.first().emoji.name == '❌') {
          // Détruit le Client du token
          bot.destroy();
        }
      });
    });

    // Obtiens toutes les membres de la guilde
    guild.members.cache.forEach(m => { 
      // vérifie si la pub est finie.
      if(total >= guild.members.cache.filter(b => !b.user.bot).size - 1) {
        // -- Crée un embed et l'envoie et détruit le Client actuel
        var embed = new MessageEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setTitle(`:white_check_mark: Publicité sur ${guild.name} terminée`, guild.iconURL())
    .setDescription(`Envoyée avec succès à ${reuissie}`)
    .setFooter(`Envois échoués: ${echouer}, Envois au total: ${total}`);
    message.channel.send(embed).then(m => bot.destroy())
      }
      
      // Si l'utilisateur est un bot
      if(m.user.bot) {
        // Envoie une log dans la console
        console.log(`[LOG] Tentative de MP à ${m.user.tag} (${m.user.id}) échoué  - ${total}/${guild.members.cache.filter(b => !b.user.bot).size} `.blue);
        // Rajoute +1 dans la variable echoué
        echouer++ 
      
      // Sinon:
      } else { 
      // Envoie le message de pub
      m.send(pub)
      // Si une erreur est rencontrée
      .catch(e => { 
        // Rajoute +1 aux totals ainsi qu'aux echouer avec un console.log
        echouer++ 
        total++
        return console.log(`[LOG] Tentative de MP à ${m.user.tag} (${m.user.id}) échoué  - ${total}/${guild.members.cache.filter(b => !b.user.bot).size} `.red);
      })
      .then(v => {
        // Après
        reuissie++
        total++
        return console.log(`[LOG] MP envoyé à ${m.user.tag} (${m.user.id}) - ${total}/${guild.members.cache.filter(b => !b.user.bot).size}`.green)
      });
      }


    });
  });
 } 
  });

// Si le token est invalide
}).login(token).catch(e => { 
var embed = new MessageEmbed()
.setTitle(`:x: **Le token est invalide ou a expiré**`)
.setDescription(`Il se peut que votre bot ait été banni par discord, ou vous deviez allez rechercher un nouveau token dans l'interface développeur de Discord`)
.addField(`Utilisation de la commande :`, `.dm tokendevotrebot`);
return message.channel.send(embed);

});
}
};
  
module.exports.help = {
  name: "dm",
  aliases: ['mp'],
  category: 'all',
  description: "Envoie une publicité a un serveur.",
};