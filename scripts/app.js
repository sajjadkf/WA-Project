    const navToggleicon = document.querySelector('.nav__toggle-icon')
    const menu = document.querySelector('.menu')

    navToggleicon.addEventListener('click',function (){
      this.classList.toggle('nav__toggle-icon--open') 
      menu.classList.toggle('menu--open')
    })