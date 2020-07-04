// Formule pour déclarer les modules 
const
    { Client, Collection} = require("discord.js"),
    client = new Client()
    figlet = require('figlet'),
    colors = require('colors'),
    readline = require('readline'),
    { readdirSync } = require("fs"),
    config = require("./config.json");
client.commands = new Collection()

    // --------------------------

console.clear()
process.title = "SponsorBot en cours de chargement!"
console.log(`
      _,met$$$$$gg.                `.red + `███████`.red + `╗`.white + `██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ███`.red + `╗`.white + `   ██`.red + `╗`.white + `███████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ████████`.red + `╗`.white + `      ` + ` 
    ,g$$$$$$$$$$$$$$$P.            `.red + `██`.red + `╔════╝`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `████`.red + `╗`.white + `  ██`.red + `║`.white + `██`.red + `╔════╝`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗╚══`.white + `██`.red + `╔══╝`.white + `
  ,g$$P""       """Y$$.".          `.red + `███████`.red + `╗`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔`.white + `██`.red + `╗`.white + ` ██`.red + `║`.white + `███████`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██████`.red + `╔╝`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `   
 ,$$P'              '$$$.          `.red + `╚════`.white + `██`.red + `║`.white + `██`.red + `╔═══╝`.white + ` ██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `║╚`.white + `██`.red + `╗`.white + `██`.red + `║╚════`.white + `██`.red + `║`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `
',$$P       ,ggs.     '$$b:        `.red + `███████`.red + `║`.white + `██`.red + `║`.white + `     ╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║ ╚`.white + `████`.red + `║`.white + `███████`.red + `║╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `  ██`.red + `║`.white + `██████`.red + `╔╝╚`.white + `██████`.red + `╔╝`.white + `   ██`.red + `║`.white + `   
'd$$'     ,$P"'   .    $$$         `.red + `╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝   `.white + `v${config.version}`.red +  ` 
 $$P      d$'     ,    $$P                                                                                                                                       
  $$:      $$.   -    ,d$$'
   $$;      Y$b._   _,d$P'                                                                    
    Y$$.    '.'"Y$$$$P"'                          
     '$$b      "-.__                             
       'Y$$b
         'Y$$.
            '$$b.
               'Y$$b.
                  '"Y$b._ 
                     '""""

                     `.red + `SponsorBot`.white + ` est en cours de chargement...`.red + `
                     ________________________________________________________________________
                     `.red);
// -- Création d'une fonctions pour charger toutes les commandes
const loadCommands = (dir = "./commandes/") => {
    readdirSync(dir).forEach(dirs => {
      const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      
      for (const file of commands) {
        const getFileName = require(`${dir}/${dirs}/${file}`);
        client.commands.set(getFileName.help.name, getFileName);
        console.log(`[SponsorBot]`.red + ` Chargement de la commande`.white + ` ${getFileName.help.name}.js`.red);
      };
    });
  };

// -- Création d'une fonctions pour charger toutes les évènements
const loadEvents = (dir = "./modules/") => {
        readdirSync(dir).forEach(dirs => {
          const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      
          for (const event of events) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName, evt.bind(null, client));
            console.log(`[SponsorBot]`.red + ` Chargement du module`.white + ` ${evtName}.js`.red);
          };
        });
      };
  
      // --- Lance les deux fonctions pour charger les évènements ainsi que les commandes
      loadEvents()
      loadCommands()


      // -- Tentatives de connections au bots
client.login(config.token)
// -- Message si une erreur interviens lorsque nous lançons le bot
.catch(e => {
console.clear()
process.title = "SponsorBot - Erreur rencontrée: Token invalide"
console.log(`
      _,met$$$$$gg.                `.red + `███████`.red + `╗`.white + `██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ███`.red + `╗`.white + `   ██`.red + `╗`.white + `███████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ████████`.red + `╗`.white + `      ` + ` 
    ,g$$$$$$$$$$$$$$$P.            `.red + `██`.red + `╔════╝`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `████`.red + `╗`.white + `  ██`.red + `║`.white + `██`.red + `╔════╝`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗╚══`.white + `██`.red + `╔══╝`.white + `
  ,g$$P""       """Y$$.".          `.red + `███████`.red + `╗`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔`.white + `██`.red + `╗`.white + ` ██`.red + `║`.white + `███████`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██████`.red + `╔╝`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `   
 ,$$P'              '$$$.          `.red + `╚════`.white + `██`.red + `║`.white + `██`.red + `╔═══╝`.white + ` ██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `║╚`.white + `██`.red + `╗`.white + `██`.red + `║╚════`.white + `██`.red + `║`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `
',$$P       ,ggs.     '$$b:        `.red + `███████`.red + `║`.white + `██`.red + `║`.white + `     ╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║ ╚`.white + `████`.red + `║`.white + `███████`.red + `║╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `  ██`.red + `║`.white + `██████`.red + `╔╝╚`.white + `██████`.red + `╔╝`.white + `   ██`.red + `║`.white + `   
'd$$'     ,$P"'   .    $$$         `.red + `╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝`.white + `       v${config.version}`.red + `
 $$P      d$'     ,    $$P 
  $$:      $$.   -    ,d$$'
   $$;      Y$b._   _,d$P' 
    Y$$.    '.'"Y$$$$P"'    
     '$$b      "-.__                             
       'Y$$b    
         'Y$$.
            '$$b.
               'Y$$b.
                  '"Y$b._ 
                     '""""

                     `.red + `X Erreur rencontrée:`.red + ` Le token fournis est invalide.`.white + `
                     ________________________________________________________________________
                     `.red);
});