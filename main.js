let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');

    if(window.scrollY > 0){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}
            // this is my code still not working 
// let faqBox = document.querySelectorAll('.faq .box-container .box');

// faqBox.forEach(box =>{

//     box.onclick = () =>{

//         let content = box.querySelector('.content');
//         let icon = box.querySelector('i');

//         if(content.classList.contains('active')){
//             content.classList.remove('active');
//         }else{
//             document.querySelectorAll('.faq .box-container .box .content').forEach(contents =>{
//                 contents.classList.remove('active');
//             });
//             content.classList.add(active);
//         }
//         if(icon.classList.contains('fa-minus')){
//             icon.classList.replace('fa-minus','fa-plus');
//         }else{
//             document.querySelectorAll('.faq .box-container .box i').forEach(icons =>{
//                 icons.classList.replace('fa-minus','fa-plus');
//             });
//             icon.classList.replace('fa-plus','fa-,minus');
//         }

//     }
// })
                // this is ai code still not working 
let faqBox = document.querySelectorAll('.faq .box-container .box');

faqBox.forEach(box => {

    // Add an event listener to each box
    box.addEventListener('click', () => {

        // Get the content and icon of the clicked box
        let content = box.querySelector('.content');
        let icon = box.querySelector('i');

        // Close all other boxes (resetting active content and icons)
        faqBox.forEach(otherBox => {
            let otherContent = otherBox.querySelector('.content');
            let otherIcon = otherBox.querySelector('i');

            // Close content and reset icons for all boxes except the clicked one
            if (otherBox !== box) {
                otherContent.classList.remove('active');
                otherIcon.classList.replace('fa-minus', 'fa-plus');
            }
        });

        // Toggle the clicked content's active state
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            content.classList.add('active');
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});
   