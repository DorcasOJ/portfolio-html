document.querySelector(".scroll-to-project").addEventListener("click", () => {
  window.scrollBy({
    top: window.scrollY + window.innerHeight * 0.9,
    behavior: "smooth",
  });
});

const projectImages = document.querySelectorAll(".project-content .img");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.clientWidth || document.documentElement.clientWidth)
  );
}


// document.querySelector(".arrow-left").addEventListener("click", () => {
//   let offsetX;
//   projectImages.forEach((section) => {
//     if (isInViewport(section)) {
//       if (section.previousElementSibling) {
//         offsetX = section.previousElementSibling.classList;
        
//         // scale current image, unscale the previous
//         document
//           .querySelector("." + Array.from(section.classList)[1]).style.transform= "scale(1, 1)";
//           document
//           .querySelector("." + Array.from(section.classList)[1]).style.transition = "all 0.2s ease 0s";

//         document
//           .querySelector("." + Array.from(offsetX)[1]).style. transform= "scale(1.1, 1.2)";
//           document
//           .querySelector("." + Array.from(offsetX)[1]).style.transition = "all 0.2s ease 0s";

//         document
//           .querySelector("." + Array.from(offsetX)[1])
//           .scrollIntoView({
//             behavior: "smooth",
//             inline: "center",
//             block: "nearest",
//           });
//       } else {
//         // if ended start go to the end

//         document
//         .querySelector(
//             "." +
//               Array.from(projectImages[0].classList)[1]
//           ).style.transform= "scale(1, 1)";
//         document
//         // .querySelector(
//         //     "." +
//         //       Array.from(projectImages[projectImages.length - 1].classList)[1]
//         //   ).style.transition = "all 0.2s ease 0s";

//         document
//         .querySelector(
//             "." +
//               Array.from(projectImages[projectImages.length - 1].classList)[1]
//           ).style.transform= "scale(1.1, 1.2)";
//         document
//         .querySelector(
//             "." +
//               Array.from(projectImages[projectImages.length - 1].classList)[1]
//           ).style.transition = "all 0.2s ease 0s";

          
//         document
//           .querySelector(
//             "." +
//               Array.from(projectImages[projectImages.length - 1].classList)[1]
//           )
//           .scrollIntoView({
//             behavior: "smooth",
//             inline: "center",
//             block: "nearest",
//           });
//       }
//       //    scall current image
//     }
//   });
// });

// document.querySelector(".arrow-right").addEventListener("click", () => {
//   let offsetX;
//   projectImages.forEach((section) => {
//     if (isInViewport(section)) {
//         if (section.nextElementSibling) {
//           offsetX = section.nextElementSibling.classList;
          
//           // scale current image, unscale the previous
//           document
//             .querySelector("." + Array.from(section.classList)[1]).style.transform= "scale(1, 1)";
//             document
//             .querySelector("." + Array.from(section.classList)[1]).style.transition = "all 0.2s ease 0s";
  
//           document
//             .querySelector("." + Array.from(offsetX)[1]).style. transform= "scale(1.1, 1.2)";
//             document
//             .querySelector("." + Array.from(offsetX)[1]).style.transition = "all 0.2s ease 0s";
  
//           document
//             .querySelector("." + Array.from(offsetX)[1])
//             .scrollIntoView({
//               behavior: "smooth",
//               inline: "center",
//               block: "nearest",
//             });
//         } else {
//           // if ended start go to the begining
//           console.log( "." +
//             Array.from(projectImages[0].classList)[1])
//           document
//           .querySelector(
//               "." +
//                 Array.from(projectImages[0].classList)[1]
//             ).style.transform= "scale(1.1, 1.2)";
//           document
//           .querySelector(
//               "." +
//                 Array.from(projectImages[0].classList)[1]
//             ).style.transition = "all 0.2s ease 0s";
  
            
//           document
//             .querySelector(
//               "." +
//                 Array.from(projectImages[0].classList)[1]
//             )
//             .scrollIntoView({
//               behavior: "smooth",
//               inline: "center",
//               block: "nearest",
//             });
//         }
//         //    scall current image
//       }
//   });
// });


// document.querySelector('.img-div').addEventListener('mousewheel', (event) => {
//   event.preventDefault();
//   document.querySelector('.img-div').scrollLeft += event.deltaY;
// }, {passive: false})


// document.addEventListener('scroll', () => {
//   const activeSection = document.activeElement
//   console.log(activeSection, event.target)
// })

// select nav at the top
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
      const className =Array.from(section.classList)[0].split('-')[0]

      const selectNav = document.querySelector("nav ul.nav-top")

      selectNav.querySelector('.' + className).classList.add('active')

      selectNav.querySelectorAll('li').forEach(navList => {
        if (!navList.classList.contains(className)) {

          navList.classList.remove('active')
        }
      })



    }
  })
})


document.querySelector('.menu-icon').addEventListener('click', (event) => {
  if (getComputedStyle(document.querySelector('.menu-open')).display == "inline" || getComputedStyle(document.querySelector('.menu-open')).display == "block"  ) {

    document.querySelector('.menu-open').style.display = 'none';
    document.querySelector('.menu-close').style.display = "block";
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.drop-down-nav').style.display = 'block';

  } else if  (getComputedStyle(document.querySelector('.menu-close')).display === "block" || getComputedStyle(document.querySelector('.menu-close')).display === "inline" ) {
    document.querySelector('.menu-open').style.display = 'block';
    document.querySelector('.menu-close').style.display = "none";
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.drop-down-nav').style.display = 'none';
    
  }
})


document.querySelector('.drop-down-list').addEventListener('click', (event) => {
  document.querySelector('.content').style.display = 'block';
  document.querySelector('.menu-open').style.display = 'block';
  document.querySelector('.menu-close').style.display = "none";
  document.querySelector('.drop-down-nav').style.display = 'none';
    
})