setTimeout(()=>{
    const loader = document.querySelector('.loader')
    const main = document.querySelector('#main')

    main.style.overflow = 'visible'
    loader.style.display = 'none'
},2000)


function showNavBar(){
    const navBar = document.querySelector('.hamburger-nav')

    navBar.style.display = 'block'
}

function removeNavBar(){
    const navBar = document.querySelector('.hamburger-nav')

    navBar.style.display = 'none'
}