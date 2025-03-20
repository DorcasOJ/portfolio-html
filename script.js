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
    rect.left >= 0 &&
    rect.right <= (projectImages.clientWidth || document.documentElement.clientWidth)
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


