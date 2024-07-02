import { Ui } from "./ui.js";
export class Details {
    constructor(id) {
        this.ui = new Ui()

        document.getElementById("btnClose").addEventListener("click", function () {
            document.querySelector("header").classList.remove("d-none")
            document.querySelector("nav").classList.remove("d-none")
            document.querySelector(".games").classList.remove("d-none")
            document.querySelector("body").style.backgroundColor = "#272b30"
            document.getElementById("gameDetails").classList.add("d-none")

        })
        this.getDetails(id)
    }

    async getDetails(gameId) {
        document.querySelector(".loading").classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e326c28fa3mshce34465d1d4757fp1700b7jsn08900fbb626f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}'`, options)
        let response = await api.json()
        this.ui.displayDetails(response)
        document.querySelector(".loading").classList.add("d-none")
    }
}