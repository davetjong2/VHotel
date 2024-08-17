//Header
const toggleButton = document.querySelector('.toggle_button')
        const toggleButtonIcon = document.querySelector('.toggle_button i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleButton.onclick = function(){
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleButtonIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }

//HomeSlide
let j = 1
var slides = document.querySelectorAll(".slide")
var buttons = document.querySelectorAll(".button")
let currentSlide = 1

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        buttons.forEach((button) => {
            button.classList.remove('active');
        })
    })

    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach((button , i) => {
    button.addEventListener("click" , () =>{
        manualNav(i);
        currentSlide = i;
        j = i
    })
});


var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            })
            slides[j].classList.add('active');
            buttons[j].classList.add('active');
            j++;

            if(slides.length == j){
                j = 0;
            }
            if(j>= slides.length){
                return;
            }
            repeater();
        } , 5000);
    }
    repeater();
}
repeat();

//OurRooms
let j_ourRooms = 1
var slides_ourRooms = document.querySelectorAll(".slideRoom")
var buttons_ourRooms = document.querySelectorAll(".buttonRoom")
let currentSlide_ourRooms = 1

var manualNav_ourRooms = function(manual_ourRooms){
    slides_ourRooms.forEach((slideRoom) => {
        slideRoom.classList.remove('activeRoom');

        buttons_ourRooms.forEach((buttonRoom) => {
            buttonRoom.classList.remove('activeRoom');
        })
    })

    slides_ourRooms[manual_ourRooms].classList.add('activeRoom');
    buttons_ourRooms[manual_ourRooms].classList.add('activeRoom');
}

buttons_ourRooms.forEach((buttonRoom , i_ourRooms) => {
    buttonRoom.addEventListener("click" , () =>{
        manualNav_ourRooms(i_ourRooms);
        currentSlide_ourRooms = i_ourRooms;
        j_ourRooms = i_ourRooms
    })
});


var repeat_ourRooms = function(activeClass){
    let active_ourRooms = document.getElementsByClassName('activeRoom');

    var repeater_ourRooms = () => {
        setTimeout(function(){

            [...active_ourRooms].forEach((activeSlide) => {
                activeSlide.classList.remove('activeRoom')
            })
            slides_ourRooms[j_ourRooms].classList.add('activeRoom');
            buttons_ourRooms[j_ourRooms].classList.add('activeRoom');
            j_ourRooms++;

            if(slides_ourRooms.length == j_ourRooms){
                j_ourRooms = 0;
            }
            if(j_ourRooms>= slides_ourRooms.length){
                return;
            }
            repeater_ourRooms();
        } , 5000);
    }
    repeater_ourRooms();
}
repeat_ourRooms();

//roomTypeButton
const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    roomType = document.querySelector(".roomType");

    let a_roomType = 1;
    if(a_roomType>=3){
        plus.style.opacity = .5;
    }else{
        plus.style.opacity = 1;
    }
    if(a_roomType<=1){
        minus.style.opacity = .5;
    }else{
        minus.style.opacity = 1;
    }
    plus.addEventListener("click", ()=>{
        a_roomType++;
        if(a_roomType>=3){
            plus.style.opacity = .5;
        }else{
            plus.style.opacity = 1;
        }
        if(a_roomType<=1){
            minus.style.opacity = .5;
        }else{
            minus.style.opacity = 1;
        }
        if(a_roomType>=3){
            a_roomType=3;
        }
        roomType.innerText = a_roomType;
        console.log(a_roomType)
    })
    minus.addEventListener("click", ()=>{
        a_roomType--;
        if(a_roomType>=3){
            plus.style.opacity = .5;
        }else{
            plus.style.opacity = 1;
        }
        if(a_roomType<=1){
            minus.style.opacity = .5;
        }else{
            minus.style.opacity = 1;
        }
        if(a_roomType<=1){
            a_roomType=1;
        }
        roomType.innerText = a_roomType;
        console.log(a_roomType)
    })

//includeBFButton
const plus1 = document.querySelector(".plus1"),
minus1 = document.querySelector(".minus1"),
include = document.querySelector(".include");

let a_includeBF = 1;
if(a_includeBF>=2){
    plus1.style.opacity = .5;
}else{
    plus1.style.opacity = 1;
}
if(a_includeBF<=1){
    minus1.style.opacity = .5;
}else{
    minus1.style.opacity = 1;
}
plus1.addEventListener("click", ()=>{
    a_includeBF++;
    if(a_includeBF>=2){
        plus1.style.opacity = .5;
    }else{
        plus1.style.opacity = 1;
    }
    if(a_includeBF<=1){
        minus1.style.opacity = .5;
    }else{
        minus1.style.opacity = 1;
    }
    if(a_includeBF>=2){
        a_includeBF=2;
    }
    if(a_includeBF==1){
        include.innerText = "YES";
    }else if(a_includeBF==2){
        include.innerText = "NO";
    }
    console.log(a_includeBF)
})
minus1.addEventListener("click", ()=>{
    a_includeBF--;
    if(a_includeBF>=2){
        plus1.style.opacity = .5;
    }else{
        plus1.style.opacity = 1;
    }
    if(a_includeBF<=1){
        minus1.style.opacity = .5;
    }else{
        minus1.style.opacity = 1;
    }
    if(a_includeBF<=1){
        a_includeBF=1;
    }
    if(a_includeBF==1){
        include.innerText = "YES";
    }else if(a_includeBF==2){
        include.innerText = "NO";
    }
    console.log(a_includeBF)
})