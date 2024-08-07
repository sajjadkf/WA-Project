    const navToggleicon = document.querySelector('.nav__toggle-icon')
    const menu = document.querySelector('.menu')
    const resumeListItems = document.querySelectorAll('.resume-list__item')

    navToggleicon.addEventListener('click',function (){
      this.classList.toggle('nav__toggle-icon--open') 
      menu.classList.toggle('menu--open')
    })

    resumeListItems.forEach(resumeListItem => {
      resumeListItem.addEventListener('click',function (){
          document.querySelector('.resume-list__item--show').classList.remove('resume-list__item--show')
          this.classList.add('resume-list__item--show')
      })
  })