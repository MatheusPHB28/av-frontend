//seleciona todos os elementos com a class product-box
const boxes = document.querySelectorAll(".product-box")

//interação de cada elemento box

boxes.forEach((box) => {
    //Encontrar o elemento img dentro do elemento box atual

    const Img = box.querySelector(".product-image")

    box.addEventListener("mousemove", (e) => {
    const x = e.clientX -box.getBoundingClientRect().left
    const y = e.clientY -box.getBoundingClientRect().top

    console.log(x,y)

    log.style.transformOrigin = `${x}px ${y}px`
    Img.style.transform = "scale(3)"

})

box.addEventListener("mouseleave", (e) => {

    Img.style.transformOrigin = "center"
    img.style.transform = "scale(1)"

})

})
