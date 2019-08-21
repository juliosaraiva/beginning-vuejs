import BotaoContador from "./BotaoContador.js";

export default {
    name: "MenuPrincipal",
    components: {
        BotaoContador
    },
    template: `
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
            <botao-contador></bota-contador>
        </div>

    `
}