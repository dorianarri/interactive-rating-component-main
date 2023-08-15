const ratingNum = document.querySelectorAll(".rating-num span");
const submitBtn = document.querySelector(".submit-button");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thank-card");
const selectedNum = document.querySelector(".selected-num");


//  number logic
let rate = null;

ratingNum.forEach(num => {
    num.addEventListener('click', (e)=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

submitBtn.addEventListener("click", ()=>{
    if (rate){
        selectedNum.innerText = rate;
        ratingCard.classList.add("hidden");
        thanksCard.classList.remove("hidden");
    }
})