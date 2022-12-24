
const question = document.querySelectorAll(".question");
 
question.forEach(question => {
    question.addEventListener("click", ()=>{
        question.classList.toggle("active");
    })
});