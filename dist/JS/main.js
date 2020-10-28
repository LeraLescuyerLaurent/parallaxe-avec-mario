let mario = document.querySelector("#mario")
let solHaut = document.querySelector("#sol-haut")
let solBas = document.querySelector("#sol-bas")
let paysage = document.querySelector("#paysage")
let ciel = document.querySelector("body")


// on conserve le decalage des elements
let decal = 0


window.onload  = () => {
    document.addEventListener('keydown', marcher)
    document.addEventListener('keyup', stopper)
}



/**
 * @Description fait marcher mario
 * @date 2020-10-28
 * @returns {any}
 */
function marcher(e){
    switch (e.key) {
        case "ArrowLeft":
        // annimate mario
            mario.classList.add("mario-gauche")
            mario.classList.remove("mario-droite")
            // decl éléments décort
            decal++
            // solBas.style.backgroundPositionX = (decal * 4) + "px"
            // solHaut.style.backgroundPositionX = (decal * 4) + "px"
            // paysage.style.backgroundPositionX = (decal * 2) + "px"
            // ciel.style.backgroundPositionX = decal + "px"
            parallaxe()

                break;
        case "ArrowRight":
            mario.classList.add("mario-droite")
            mario.classList.remove("mario-gauche")
            decal--
            parallaxe()
            // solBas.style.backgroundPositionX = (decal * 4) + "px"
            // solHaut.style.backgroundPositionX = (decal * 4) + "px"
            // paysage.style.backgroundPositionX = (decal * 2) + "px"
            // ciel.style.backgroundPositionX = decal + "px"


                break;
    }
}

/**
 * @Description stop la marche de mario
 * @date 2020-10-28
 * @param {any} e
 * @returns {any}
 */
function stopper(e){
    mario.classList.remove("mario-droite")
    mario.classList.remove("mario-gauche")
}

// refacto
function parallaxe(){
    solBas.style.backgroundPositionX = (decal * 4) + "px"
    solHaut.style.backgroundPositionX = (decal * 4) + "px"
    paysage.style.backgroundPositionX = (decal * 2) + "px"
    ciel.style.backgroundPositionX = decal + "px"

}