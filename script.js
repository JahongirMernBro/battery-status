setInterval(() => {
    navigator.getBattery().then((charge) => {
        document.querySelector("h1").textContent = charge.level * 100 + "%"
        if (charge.charging) {
            document.querySelector("h3").textContent = "Onajonim sizni yaxshi ko'raman"
            document.querySelector("button").classList.remove("hide")
            document.querySelector("button").addEventListener("click", () => {
                window.location.assign("./media.html")
            })
        } else {
            document.querySelector("h3").textContent = "Your device isn't charging"
            document.querySelector("button").classList.add("hide")
        }
    })
}, 10)
