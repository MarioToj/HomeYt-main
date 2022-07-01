

const contenedor = document.querySelector('#contenedor'  )

document.querySelector('#boton-menu').addEventListener('click', () => {

    contenedor.classList.toggle('active')
})

const comprobaAncho = () => {

    if (window.innerWidth <= 768) {
        
        contenedor.classList.remove('active')
    }else{

        contenedor.classList.add('active')
    }}

    comprobaAncho()

    window.addEventListener( 'resize', () => {

        comprobaAncho()
    } )
