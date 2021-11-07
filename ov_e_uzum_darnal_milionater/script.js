let i = 0
let price = [
    {
        id : 1,
        price:500,
        statuss:false
    },
    {
        id : 2,
        price:1000,
        statuss:false
    },
    {
        id : 3,
        price:2000,
        statuss:false
    }
]
let question=[
    {
        id:1,
        pox_id:1,
        harc:"harc 1 500 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"1"

    },
    {
        id:2,
        pox_id:1,
        harc:"harc 2 500 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"1"

    },
    {
        id:3,
        pox_id:1,
        harc:"harc 3 500 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"1"

    },
    {
        id:4,
        pox_id:2,
        harc:"harc 1 1000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"2"

    },
    {
        id:5,
        pox_id:2,
        harc:"harc 2 1000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"2"
    },
    {
        id: 6,
        pox_id:2,
        harc:"harc 3 1000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"2"
    },
    {
        id: 7,
        pox_id:3,
        harc:"harc 1 2000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"3"
    },
    {
        id: 8,
        pox_id:3,
        harc:"harc 2 2000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"3"
    },
    {
        id: 9,
        pox_id:3,
        harc:"harc 3 2000 dramanoc ",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"3"
    },
]

function start() {
    let span1 = document.getElementById("span1")
    let span2 = document.getElementById("span2")
    let span3 = document.getElementById("span3")
    let span4 = document.getElementById("span4")
    let text = document.getElementById("text")
    let button = document.getElementById("button")
    button.style.visibility = "hidden"

    let main_id = price[i].id
    let ask = question.filter(res => {
        return res.pox_id === main_id
    })
    let random_num = Math.floor(Math.random() * ask.length)
    let quest = ask[random_num]

    text.innerHTML = quest.harc
    span1.innerHTML = quest.a
    span2.innerHTML = quest.b
    span3.innerHTML = quest.c
    span4.innerHTML = quest.d
}

function action1() {
    let main1 = document.getElementById("main")
    let main2 = document.getElementById("main2")
    main1.style.visibility = "hidden"
    main2.style.visibility = "visible"
    quest2()
}
function action2() {
    alert("duq partveciq")
    let main1 = document.getElementById("main")
    main1.style.visibility = "hidden"
}

function quest2() {
    let span1 = document.getElementById("2nd_span1")
    let span2 = document.getElementById("2nd_span2")
    let span3 = document.getElementById("2nd_span3")
    let span4 = document.getElementById("2nd_span4")
    let text = document.getElementById("2nd_text")
    i++
    let main_id = price[i].id
    let ask = question.filter(res => {
        return res.pox_id === main_id
    })
    let random_num = Math.floor(Math.random() * ask.length)
    let quest = ask[random_num]
    text.innerHTML = quest.harc
    span1.innerHTML = quest.a
    span2.innerHTML = quest.b
    span3.innerHTML = quest.c
    span4.innerHTML = quest.d
}

function istrue() {
    let main2 = document.getElementById("main2")
    let main3 = document.getElementById("main3")
    main2.style.visibility = "hidden"
    main3.style.visibility = "visible"
    quest3()
}
function wrong() {
    alert("duq partveciq")
    let main2 = document.getElementById("main2")
    main2.style.visibility = "hidden"
}

function quest3() {
    let span1 = document.getElementById("3rd_span1")
    let span2 = document.getElementById("3rd_span2")
    let span3 = document.getElementById("3rd_span3")
    let span4 = document.getElementById("3rd_span4")
    let text = document.getElementById("3rd_text")
    i++
    let main_id = price[i].id
    let ask = question.filter(res => {
        return res.pox_id === main_id
    })
    let random_num = Math.floor(Math.random() * ask.length)
    let quest = ask[random_num]
    text.innerHTML = quest.harc
    span1.innerHTML = quest.a
    span2.innerHTML = quest.b
    span3.innerHTML = quest.c
    span4.innerHTML = quest.d
}

function istrue2() {
    let main2 = document.getElementById("main2")
    let main3 = document.getElementById("main3")
    main2.style.visibility = "hidden"
    main3.style.visibility = "visible"

    let span1 = document.getElementById("3rd_span1")
    let span2 = document.getElementById("3rd_span2")
    let span3 = document.getElementById("3rd_span3")
    let span4 = document.getElementById("3rd_span4")
    let text = document.getElementById("3rd_text")

    text.innerHTML = "Shnorhavorum em duq ndhanur hasvov shaheciq 3500$"
    span1.innerHTML = ""
    span2.innerHTML = ""
    span3.innerHTML = ""
    span4.innerHTML = ""
}
function wrong2() {
    alert("duq partveciq")
    let main3 = document.getElementById("main3")
    main3.style.visibility = "hidden"
}