
document.querySelector('.scroll-to-project').addEventListener('click', () => {
    window.scrollBy({
        top: window.scrollY + (window.innerHeight * 0.70), 
        behavior: "smooth", 
    })
    
} )