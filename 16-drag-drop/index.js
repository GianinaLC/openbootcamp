const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', e => {
        //console.log('estoy arrastrando el parrafo numero ' + parrafo.innerText)
        parrafo.classList.add('dragging')
        e.dataTransfer.setData('id', parrafo.id)
    })

    parrafo.addEventListener('dragend', () =>{
        parrafo.classList.remove('dragging')
    })

})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', e => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move' //efecto debajo del cursor
    })

    seccion.addEventListener('drop', e => {
        const idParrafo = e.dataTransfer.getData('id')
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)

    })

})

const papelera = document.querySelector(".papelera")

papelera.addEventListener('dragover', event => {
    event.preventDefault()
})

papelera.addEventListener('drop', event => {
    const idParrafo = event.dataTransfer.getData('id')
    document.getElementById(idParrafo).remove()
})