// pages
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'block';
        document.querySelector('.login-page').style.display = 'none';
        document.querySelector('.signup-page').style.display = 'none';
    })
})

document.querySelectorAll('.login').forEach(logIn => {
    logIn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none';
        document.querySelector('.login-page').style.display = 'block';
        document.querySelector('.signup-page').style.display = 'none';
    })
})

document.querySelectorAll('.signup').forEach(signUp => {
    signUp.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none';
        document.querySelector('.login-page').style.display = 'none';
        document.querySelector('.signup-page').style.display = 'flex';
    })
})
// end of pages

// navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if(window.innerWidth < 1000){
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if(!navbar.classList.contains('change')){
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headinglink => {
        headinglink.addEventListener('click', () => {
            headinglink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else{
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar-wrapper').style.background = 'none'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}

window.addEventListener('resize', () => {
    window.location.reload()
})
// end of navigation