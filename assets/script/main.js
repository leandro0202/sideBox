function slide() {
    const container = document.querySelectorAll('.container-works .area3--projects')
    const containerArray = Array.from(container)
    let nextBox = 1;
    let uNextBox = 0;
    pegaElementos('.btn-slide').forEach(elemento => {
        elemento.addEventListener('click', e => {
            const el = e.target;

            if(uNextBox == 0){ uNextBox = 3}
            if(el.classList.contains('rigth')){
                if(nextBox == 0){
                    uNextBox = 3
                }else{
                    uNextBox = nextBox
                }
                removeClasse(container)
                containerArray[nextBox].classList.add('selected')
                if(nextBox >= 2){
                    nextBox = 0
                }else{
                    nextBox++
                }
                
    
            }if(el.classList.contains('left')){
                removeClasse(container)
                uNextBox--
                nextBox = uNextBox
                containerArray[uNextBox].classList.add('selected')
                if(uNextBox <= 0){
                    uNextBox = 3
                }
            }
        })
    })
}

function removeClasse(elemen) {
    elemen.forEach(elemento => {
        elemento.classList.remove('selected')
    })
}

function pegaElemento(elemento) {
    return document.querySelector(elemento)
}
function pegaElementos(elemento) {
    return document.querySelectorAll(elemento)
}

slide()