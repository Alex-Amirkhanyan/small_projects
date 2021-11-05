let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0

function action() {
    let cars = document.getElementsByClassName("main_child_car")

    let race = setInterval(() => {
        num1 = num1 + Math.round(Math.random() * 3)
        cars[0].style.left = num1 + "%"

        num2 = num2 + Math.round(Math.random() * 3)
        cars[1].style.left = num2 + "%"

        num3 = num3 + Math.round(Math.random() * 3)
        cars[2].style.left = num3 + "%"

        num4 = num4 + Math.round(Math.random() * 3)
        cars[3].style.left = num4 + "%"

        if(num1 > 83.5) {
            alert("haxtec karmir meqenan")
            clearInterval(race)
        }else if(num2 > 83.5) {
            alert("haxtec kanach meqenan")
            clearInterval(race)
        }else if(num3 > 83.5) {
            alert("haxtec dexin meqenan")
            clearInterval(race)
        }else if(num4 > 83.5) {
            alert("haxtec sirenvi meqenan")
            clearInterval(race)
        }
    }, 100)
}