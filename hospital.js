let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

let count = 0;

doctors.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun()
}, 3000)


// service Card

card.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>${curCard.lastElementChild.innerHTML}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, explicabo laboriosam temporibus delectus obcaecati repudiandae at quo, nihil animi fuga distinctio perspiciatis</p>   
        `
        document.querySelector("body").appendChild(div);
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove()
        })
    })
})

const schedules = document.querySelector('.schedules');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPosition = 0; // Keeps track of the scroll position

// Width of a single card (adjust as per your design)
const cardWidth = document.querySelector('.card').offsetWidth + 10; // Card width + gap

// Move the schedule slider left
prevBtn.addEventListener('click', () => {
    currentPosition = Math.min(currentPosition + cardWidth, 0);
    schedules.style.transform = `translateX(${currentPosition}px)`;
});

// Move the schedule slider right
nextBtn.addEventListener('click', () => {
    const maxScroll = -(schedules.scrollWidth - schedules.offsetWidth);
    currentPosition = Math.max(currentPosition - cardWidth, maxScroll);
    schedules.style.transform = `translateX(${currentPosition}px)`;
});
