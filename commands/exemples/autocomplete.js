import { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';

export const command = {
    data: new SlashCommandBuilder()
    .setName('autocomplete')
    .setDescription('Ceci est  une commande d\'exemple')
    .setDMPermission(true)
    .addStringOption(option =>
        option.setName('option')
        .setDescription('option  qui va être complétée')
        .setAutocomplete(true)
        ),
    async autocomplete(interaction) {
        const choices = [
            { name: "Salut!", value: "1" },
            { name: "Ceci est un exemple", value:  "2" },
            {  name: "D'autocomplete!", value: "3" }
        ];

        await interaction.respond(choices.map(c => ({ name: c.name, value: c.value })));
    },
    async execute(interaction) {
        await interaction.reply({ content: `Vous avez selectionné la ${interaction.options.getString('option')}ème option!`, ephemeral: true });
    }
}