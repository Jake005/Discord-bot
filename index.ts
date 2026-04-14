import DiscordJs, { IntentsBitField } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJs.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages

    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if(message.content === 'hello' ) {
        message.reply({
            content: 'hello, I am alive!',
        })
    }
} )



client.login(process.env.Token);

