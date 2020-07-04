module.exports = (client) => {
    console.clear()
if(!client.user.bot) {
console.clear()
process.title = "SponsorBot - Erreur rencontrée: Token fournis invalide"
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

                     `.red + `X Erreur rencontrée:`.red + ` Votre bot correspond à un compte normal`.white + `
                     ________________________________________________________________________
                     `.red);
process.exit()

} else {
   console.log(`
      _,met$$$$$gg.                `.red + `███████`.red + `╗`.white + `██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ███`.red + `╗`.white + `   ██`.red + `╗`.white + `███████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + ` ██████`.red + `╗`.white + `  ██████`.red + `╗`.white + ` ████████`.red + `╗`.white + `      ` + ` 
    ,g$$$$$$$$$$$$$$$P.            `.red + `██`.red + `╔════╝`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `████`.red + `╗`.white + `  ██`.red + `║`.white + `██`.red + `╔════╝`.white + `██`.red + `╔═══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔═══`.white + `██`.red + `╗╚══`.white + `██`.red + `╔══╝`.white + `
  ,g$$P""       """Y$$.".          `.red + `███████`.red + `╗`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔`.white + `██`.red + `╗`.white + ` ██`.red + `║`.white + `███████`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██████`.red + `╔╝`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `   
 ,$$P'              '$$$.          `.red + `╚════`.white + `██`.red + `║`.white + `██`.red + `╔═══╝`.white + ` ██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `║╚`.white + `██`.red + `╗`.white + `██`.red + `║╚════`.white + `██`.red + `║`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `╔══`.white + `██`.red + `╗`.white + `██`.red + `║`.white + `   ██`.red + `║`.white + `   ██`.red + `║`.white + `
',$$P       ,ggs.     '$$b:        `.red + `███████`.red + `║`.white + `██`.red + `║`.white + `     ╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║ ╚`.white + `████`.red + `║`.white + `███████`.red + `║╚`.white + `██████`.red + `╔╝`.white + `██`.red + `║`.white + `  ██`.red + `║`.white + `██████`.red + `╔╝╚`.white + `██████`.red + `╔╝`.white + `   ██`.red + `║`.white + `   
'd$$'     ,$P"'   .    $$$         `.red + `╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝`.white + `       v${config.version}`.red + `
 $$P      d$'     ,    $$P 
  $$:      $$.   -    ,d$$'
   $$;      Y$b._   _,d$P'                                `.red + `[+]`.white + ` Plus d'information à propos de votre bot:`.red + `
    Y$$.    '.'"Y$$$$P"'                                           `.red + ` Pseudonyme:`.white + ` ${client.user.tag}`.red + `
     '$$b      "-.__                                               `.red + ` ID:`.white + ` ${client.user.id}`.red + `
       'Y$$b                             
         'Y$$.                                                      `.red + ` Nombre de serveurs:`.white + ` ${client.guilds.cache.size} guildes`.red + `
            '$$b.                                                   `.red + ` Nombre de personnes:`.white + ` ${client.users.cache.size} membres`.red + `
               'Y$$b.
                  '"Y$b._                                               
                     '""""

                     `.red + `V Chargement effectué:`.green + ` Vous pouvez utilisez le bot`.white + `
                     ________________________________________________________________________
                     `.red); 
                     process.title = "SponsorBot - Actif"

}
}