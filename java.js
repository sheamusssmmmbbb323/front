
// stay any one opened
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// once open
// document.querySelectorAll('.faq-question').forEach(question => {
//     question.addEventListener('click', () => {
//         // Close other open items
//         const otherItems = document.querySelectorAll('.faq-item.active');
//         otherItems.forEach(item => {
//             if (item !== question.parentElement) {
//                 item.classList.remove('active');
//             }
//         });
        
//         // Toggle current item
//         const faqItem = question.parentElement;
//         faqItem.classList.toggle('active');
//     });
// });