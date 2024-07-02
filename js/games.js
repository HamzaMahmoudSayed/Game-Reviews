import { Ui } from "./ui.js"
import { Details } from "./details.js"

let links = document.querySelectorAll("nav .collapse ul li a")
let loading = document.querySelector(".loading")
let gamesSection = document.querySelector(".games")


export class Games {
    constructor() {
        this.getGames("mmorpg")

        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector("ul .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.innerText.toLowerCase());

            });
        });


        this.ui = new Ui();

    }


    async getGames(categoryName) {
        loading.classList.remove("d-none")
        gamesSection.classList.add("d-none")

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e326c28fa3mshce34465d1d4757fp1700b7jsn08900fbb626f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options)
        let response = await api.json()
        this.ui.displayData(response);
        let x = response
        this.clickEvent(x)
        loading.classList.add("d-none");
        gamesSection.classList.remove("d-none")

    }

    clickEvent(x) {
        let cards = document.querySelectorAll(".card")
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", () => {
                const id = x[i].id
                this.showDetails(id)
            })
        }
    }

    showDetails(id) {
        const i = new Details()
        i.getDetails(id)
    }


}
