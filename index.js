const express = require('express')
const telegramBot = require('node-telegram-bot-api')

const token = '1060556851:AAFCS22VbDVtTYUEa9ZbvKdM_xiBQji5rZA' 
const opt = {polling:true}
const bot = new telegramBot(token, opt)

var app = express()

app.listen(3000, function() {
    console.log('Servidor levantado en http://localhost:3000')
    bot.on ('message', function(msg) {
        if (msg.text.charAt(0) != '/') {
            return
        }
        
        var id = msg.chat.id
        var echo = msg.text
        var message = 'Comando desconocido. Por favor, escoja uno de la lista.'

        if(echo === '/status') {
            message = 'Disponible para ayudarle!'
        } else if (echo === '/info') {
            message = 'Soy el bot de The BaaS (bots as a service) Bot. Estoy aquí para ayudarle ' +
                'en la creación de sus propios bots. Si está buscando un bot personalizado, no dude en ' +
                'ponerse en contacto con nosotros en el +34 666 999 666 o en el correo info@baasbot.com'
        }

        bot.sendMessage(id, message)
    })
})
