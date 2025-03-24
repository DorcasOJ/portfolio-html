import inputs from "./utils/inputs.js";

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

// console.log(inputs.blogs)
const blogs = document.querySelector(".blog-content .img-div")
const projects = document.querySelector(".project-content .img-div")

function createImgBox(blog, _type, blogs) {
  let img_type
  _type === "blog" ? img_type="blog_img" : img_type="proj_img" 
  const divBox = document.createElement('div')
  divBox.classList.add("img-box", img_type)
  const divImg = document.createElement('div')
  divImg.className = "img"
  const bgUrl =  `url('${blog['image_url']}')`
  divImg.style.backgroundImage = bgUrl

  divBox.appendChild(divImg)
  const divImgText = document.createElement('div')
  divImgText.className = "img-text"
  const divImgTitle = document.createElement('div')
  divImgTitle.className = "img-title"
  divImgTitle.innerHTML = blog["image_title"]
  divImgText.appendChild(divImgTitle)
  const divImgDescription = document.createElement('div')
  divImgDescription.className="img-description"
  divImgDescription.innerHTML = blog["image_description"]
  divImgText.appendChild(divImgDescription)
  const divImgLink = document.createElement('div')
  divImgLink.className = "img-link"
  const a = document.createElement('a')
  a.href=blog['image_link']
  a.innerHTML = 'View Live'
  divImgLink.appendChild(a)
  divImgText.appendChild(divImgLink)
  const blurBg = document.createElement('div')
  blurBg.className = "blur-bg"
  divBox.appendChild(divImgText)
  divBox.appendChild(blurBg)
  blogs.appendChild(divBox)
}

inputs.blogs.forEach(blog => {
  createImgBox(blog, 'blog', blogs)
})


inputs.projects.forEach(project => {
  createImgBox(project, 'project', projects)
})

// send email
document.querySelector(".contact-content form button").addEventListener('click', () => {
  const contactForm = document.querySelector(".contact-content form")
  const senderName = contactForm.querySelector('input[name="name"]').value
  const senderPhone = contactForm.querySelector('input[name="tel"]').value
  const senderEmail = contactForm.querySelector('input[name="email"]').value
  const senderMessage = contactForm.querySelector('input[name="message"]').value

  let link = `mailto:ayanfedorcasolajide@gmail.com?subject=Contacting From Portfolio&body=Hi\n My name is${senderName} \n${senderMessage}\nYou can contact me via email on ${senderEmail} and telephone ${senderPhone}`
  console.log(link);
  window.location.href = link

})


