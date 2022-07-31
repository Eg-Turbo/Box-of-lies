let add = document.querySelectorAll(".add")
let sub = document.querySelectorAll(".sub")
let generate = document.querySelector(".generate")
let playT = document.querySelector(".play")
let text = [`Tell the truth!! <i class="fa-solid fa-check "></i>`,
    `Try to lie <i
 class="fa-solid fa-face-grin-beam-sweat lie-e"></i>`
]
let reset = document.querySelector(".reset")
let imgDiv = document.querySelector(".img")
let img = document.querySelector("img")
let breakP = 30
let pre = 0
generate.addEventListener("click", eve => {
    let ranImg = (Math.floor(Math.random() * 1000) % breakP) + 1
    let rantxt = (Math.floor(Math.random() * 100) % 2)
    playT.innerHTML = text[rantxt]
    playT.classList.remove("text-success")
    playT.classList.remove("text-danger")
    if ((rantxt == 0)) playT.classList.toggle("text-success")
    else playT.classList.toggle("text-danger")

    while (ranImg == pre) {
        ranImg += 1
        if (ranImg > breakP) ranImg = ((new Date().getSeconds() % breakP) + 1)

    }
    if (rantxt == 1) img.src = `imgs/lie.jpg`
    else img.src = `imgs/box-of-lies-${ranImg}.jpg`
    pre = ranImg
})
reset.addEventListener("click", ele => {
    playT.classList.remove("text-success")
    playT.classList.add("text-danger")
    playT.innerHTML = "Generate"
    img.src = ""
})
add.forEach(ele => {
    ele.addEventListener("click", eve => {
        if (isNaN(+eve.path[1].children[1].innerHTML)) eve.path[1].children[1].innerHTML = 0
        else eve.path[1].children[1].innerHTML = +eve.path[1].children[1].innerHTML + 1
    })
})
sub.forEach(ele => {
    ele.addEventListener("click", eve => {
        if (isNaN(+eve.path[1].children[1].innerHTML)) eve.path[1].children[1].innerHTML = 0
        else eve.path[1].children[1].innerHTML = +eve.path[1].children[1].innerHTML - 1
    })
})



