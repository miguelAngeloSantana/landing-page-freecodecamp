const onmobile = window.document.getElementById("hamburguer");
const clmobile = window.document.getElementById("mmain");

onmobile.addEventListener('click', () => {
    onmobile.classList.toggle('show');
    clmobile.classList.toggle('show');  
})