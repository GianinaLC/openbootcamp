const btn = document.querySelector('#btn-uno');

btn.addEventListener('click', () => {
    alert("click en el botón");
})

$(() => {
    $('#btn-uno').click(()=>{
        console.log("Hola, estoy utilizando JQuery")
    })
})