const Discord = require('discord.js')
const client = new Discord.Client()
const colors = require('colors/safe')

var prefix = "-"

client.login("NDYyMjY1NzA1NTgxMjQ4NTEy.DhfWDA.cb057PIMeGchKw65R14KPfX1UDM")


//ETAT TU BOT
client.on("ready", () => {
    console.log("Le bot est prêt")
    client.user.setGame("Issou -help")
});


//MESSAGE DE BIENVENUE
client.on('guildMemberAdd', member => {
    var random = getRandomInt(3)
    var emoji2 = client.emojis.get('462747166503600139')
    var emoji3 = client.emojis.get('462759097599524865')
        switch (random) {
            case 0: message.channel.sendMessage("Bienvenue à toi " + message.author.toString() + ", serviteur d'Issou !" + emoji2); break;
            case 1: message.channel.sendMessage("El Risistas " + message.author.toString() + " dans la place !"); break;
            case 2: message.channel.sendMessage("Faites attention, l'inspecteur " + message.author.toString() + " vient d'arriver ..." + emoji3); break;
            case 3: message.channel.sendMessage("message [4] non trouvé"); break;
            case 4: message.channel.sendMessage("message [5] non trouvé"); break;
        }
})

//MESSAGE (EMBED / MESSAGE REPLY / RANDOM IMAGE)
client.on('message',message => {


    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setAuthor(client.user.username, "https://imgur.com/yRXyghT.jpg")
        .setTitle("LISTE DES COMMANDES DU RISIBOT")
        .setDescription("Pour chaque commande, utilise le préfix -")
        .addField("-help", "Affiche les commandes du Bot.")
        .addField("-stats", "Affiche les statistiques de ton profil en message privé.")
        .addField("-invite", "Affiche le lien d'invitation du bot en message privé.")
        .addField("-issou", "Affiche une image aléatoire d'issou.")
        .addField("-issoutrash", "Affiche une image trash aléatoire d'issou.")
        .addField("-issoustory", "Court résumé d'El Risistas" + " > Plus d'informations" + " [ici](https://fr.wikipedia.org/wiki/El_Risitas)" )
        .setThumbnail("https://imgur.com/yRXyghT.jpg")
        .setTimestamp()
        .setFooter("© Bot créé par Alphao#2452 et тяuοяєҳ ;3#5335")
        message.channel.sendMessage(help_embed)
        var Date = message.createdAt.toString().split(" ")
        console.log(colors.red(message.author.username), colors.white.bold(" " + Date[1] + " " + Date[2] + " " + Date[3] + " " + Date[4]), colors.cyan.underline("Demande d'aide"))
    }

    if(message.content === prefix + "issoustory"){
        var  story_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setAuthor(client.user.username, "https://imgur.com/yRXyghT.jpg")
        .setTitle("L'HISTOIRE D'ISSOU")
        .addField("Le début :", "En juin 2007, Joya apparaît dans l'émission de Jesús Quintero Ratones Coloraos où il décrit un incident s'étant déroulé lorsqu'il travaillait comme plongeur. Il dit avoir laissé une vingtaine d'ustensiles de cuisine pour paella (paelleras) dans la mer durant la nuit pour les laver, sur le conseil de son supérieur, lequel affirmait que le sel de mer allait nettoyer les paelleras. Mais le matin, la marée était montée et il ne retrouva qu'une seule paellera. La vidéo originale est mise en ligne sur YouTube le 25 juin 2007 et est vue plus d'un million de fois pendant les huit ans précédant la naissance du mème.")
        .addField("En France :", "En France, le délire autour d'El Risitas connait une forte popularité sur les forums du site Jeuxvideo.com, en particulier sur le Blabla 18-25 ans, où les membres produisent de nombreux détournements de l'image de l'humoriste et de Jesus Quintero, et sont en grande partie responsables de sa notoriété. Différentes actions politiques menées par la communauté ont été associées à ce mème, en particulier lors de l'affaire Harvey Weinstein")
        .addField("Infos :", "Pour plus de renseignements, allez" + " [ici](https://fr.wikipedia.org/wiki/El_Risitas)")
        .setThumbnail("https://imgur.com/yRXyghT.jpg")
        .setTimestamp()
        .setFooter("© Bot créé par Alphao#2452 et тяuοяєҳ ;3#5335")
        message.channel.sendMessage(story_embed)
    }

    if(message.content === "issou"){
        var emoji1 = client.emojis.get("462747166503600139")
        message.reply("ISSOU !!!" + emoji1)
        var Date = message.createdAt.toString().split(" ")
        console.log(message.author.username + " " + Date[1] + " " + Date[2] + " " + Date[3] + " " + Date[4] + " Est un issou" )
    
    }

    if(message.content === prefix + "issoutrash"){
        var images = ["./issoutrash/1.png", "./issoutrash/2.png", "./issoutrash/3.png", "./issoutrash/4.png", "./issoutrash/5.jpeg", "./issoutrash/6.jpg", "./issoutrash/7.jpeg"]
        var rand = Math.floor(Math.random() * images.length)
        var randomImage = images[rand]
        message.channel.send({files : [randomImage]})
    }

    if(message.content === prefix + "bvn"){
        var message = ["test", "le pérou", "la bolivie", "ah"]
        var rand = Math.floor(Math.random() * message.length)
        var random = message[rand]
        message.channel.send(random)
    }

    if(message.content === prefix + "issou"){
        var images = ["./issou/1.jpg", "./issou/2.png", "./issou/3.png", "./issou/4.png", "./issou/5.png", "./issou/6.png", "./issou/7.png", "./issou/8.gif", 
        "./issou/9.png", "./issou/10.png", "./issou/11.png", "./issou/12.jpeg", "./issou/13.png", "./issou/14.png", "./issou/15.png", "./issou/16.png", "./issou/17.png", 
        "./issou/18.png", "./issou/19.png", "./issou/20.jpg", "./issou/21.jpg", "./issou/22.png", "./issou/23.gif", "./issou/24.png", "./issou/25.png", "./issou/26.png", 
        "./issou/27.png", "./issou/28.jpg", "./issou/29.jpg", "./issou/30.png", "./issou/31.png", "./issou/32.png", "./issou/33.jpg", "./issou/34.png", "./issou/35.png", 
        "./issou/36.gif", "./issou/37.gif", "./issou/38.png", "./issou/39.png", "./issou/40.png", "./issou/41.png", "./issou/42.png", "./issou/43.png", "./issou/44.png", 
        "./issou/45.jpg", "./issou/46.png", "./issou/47.png", "./issou/48.png", "./issou/49.png", "./issou/50.png", "./issou/51.jpg", "./issou/52.png", "./issou/53.png", 
        "./issou/54.png", "./issou/55.jpg", "./issou/56.png", "./issou/57.png", "./issou/58.png", "./issou/59.png",  "./issou/60.jpg",  "./issou/61.png",  "./issou/62.png",  
        "./issou/63.jpg", "./issou/64.png", "./issou/65.png", "./issou/66.png", "./issou/67.png", "./issou/68.png", "./issou/69.jpg", "./issou/70.png", "./issou/71.png",  
        "./issou/72.png", "./issou/73.png", "./issou/74.jpg", "./issou/75.jpeg", "./issou/76.jpg", "./issou/77.jpeg", "./issou/78.jpg", "./issou/79.jpeg", "./issou/80.jpg",
        "./issou/81.jpeg", "./issou/82.jpeg", "./issou/83.jpeg", "./issou/84.jpeg", "./issou/85.jpg", "./issou/86.jpeg", "./issou/87.jpg", "./issou/88.jpeg", "./issou/89.jpeg",
        "./issou/90.jpeg", "./issou/91.jpeg", "./issou/92.jpeg", "./issou/93.jpeg", "./issou/94.jpeg", "./issou/95.jpeg", "./issou/96.jpeg", "./issou/97.jpeg", "./issou/98.jpeg",
        "./issou/99.jpeg", "./issou/100.jpeg", "./issou/101.jpeg", "./issou/102.jpeg", "./issou/103.jpeg", "./issou/104.jpeg", "./issou/105.jpeg", "./issou/106.jpeg", "./issou/107.jpeg",
        "./issou/108.jpeg", "./issou/109.jpeg", "./issou/110.jpeg", "./issou/111.jpeg", "./issou/112.jpeg", "./issou/113.jpeg", "./issou/114.jpeg", "./issou/115.jpeg", "./issou/116.jpeg",
        "./issou/117.jpeg", "./issou/118.jpeg", "./issou/119.jpeg", "./issou/120.jpeg", "./issou/121.jpeg", "./issou/122.jpeg", "./issou/123.jpeg", "./issou/124.jpeg", "./issou/125.jpeg",
        "./issou/126.jpeg", "./issou/127.jpeg", "./issou/128.jpg", "./issou/129.jpg", "./issou/130.jpg", "./issou/131.jpg", "./issou/132.png", "./issou/133.jpg", "./issou/134.jpg",
        "./issou/135.jpg", "./issou/136.jpg", "./issou/137.jpg", "./issou/138.jpg", "./issou/139.jpg", "./issou/140.gif", "./issou/141.jpg", "./issou/142.jpg", "./issou/143.jpg",
        "./issou/144.jpg", "./issou/145.jpg", "./issou/146.jpg", "./issou/147.jpg", "./issou/148.jpg", "./issou/149.png", "./issou/150.jpg", "./issou/151.gif", "./issou/152.png",
        "./issou/153.jpg", "./issou/154.jpg", "./issou/155.jpeg", "./issou/156.jpeg", "./issou/157.jpg", "./issou/158.jpg", "./issou/159.jpg", "./issou/160.jpg", "./issou/161.png", 
        "./issou/162.jpg", "./issou/163.png", "./issou/164.png", "./issou/165.png", "./issou/166.jpeg",]
        var rand = Math.floor(Math.random() * images.length)
        var randomImage = images[rand]
        message.channel.send({files : [randomImage]})
    }
    //127

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ")

    switch (args[0].toLowerCase()) {
        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ")
        var msgauthor = message.author.id

        var stats_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle(`Statistiques de l'utilisateur: ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField(`Date de création de l'utilisateur :`, userCreateDate[1] + ' '+ userCreateDate[2] +' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send({embed : stats_embed})
        break;
    }

    if(message.content === prefix + "invite"){
        var invite_embed = new Discord.RichEmbed()
        .setColor("FF9900")
        .setTitle("INVITER LE BOT RISIBOT :")
        .addField("Lien d'invitation :", "voici le lien du [Risibot](https://discordbots.org/bot/462265705581248512)" + " https://discordbots.org/bot/462265705581248512")
        .addField("Serveur de support :", "IssouNation : https://discord.gg/6QEyWD8")
        .addField("Creators :", "Alphao#2452 et тяuοяєҳ ;3#5335")
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send(invite_embed)
    }
    
});
