export class Ui {
    displayData(data) {

        let cartona = ``

        for (let i = 0; i < data.length; i++) {
            cartona += `
            
            <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="border-bottom-0 card-header p-3">
                                <div class="img position-relative">
                                    <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                                </div>
                            </div>
                            <div class="card-body px-3 pb-3">
                                <div class="d-flex mb-2 justify-content-between">
                                    <h3 class="card-title">${data[i].title}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                </div>
                                <p class="card-text text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between px-3 border-top-1">
                                <span class="badge badge-color">${data[i].genre}</span>
                                <span class="badge badge-color">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>
            
            `
        }

        document.getElementById("gamesContainer").innerHTML = cartona
    }
    displayDetails(data) {
        document.querySelector("header").classList.add("d-none")
        document.querySelector("nav").classList.add("d-none")
        document.querySelector(".games").classList.add("d-none")
        document.querySelector("body").style.backgroundColor = "rgb(39, 40, 43)"
        document.getElementById("gameDetails").classList.remove("d-none")

        let content = `
        
                        <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-md-8 text-white">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class="badge text-bg-info text-black">${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info text-black">${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info text-black">${data.status}</span> </p>
                    <p class="gameDescription">${data.description}</p>
                    <a class="btn btn-outline-warning text-white" href="${data.game_url}"
                        target="_blank">Show
                        Game</a>
                </div>
        
        `
        document.getElementById("gameDetailsContainer").innerHTML = content
    }
}