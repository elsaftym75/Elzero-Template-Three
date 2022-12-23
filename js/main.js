// start skills
const ourSkills = document.querySelector(".skills");
let statsSection = document.querySelector(".stats") ;

let started = false;


window.onscroll = function() {

let windowBottomOffset = window.pageYOffset + window.innerHeight;

let ourSkillsBottomOffset = ourSkills.offsetTop + ourSkills.offsetHeight

    if (windowBottomOffset >= ourSkillsBottomOffset) {

        let progs = document.querySelectorAll(".skills .content .skill .prog span")

        progs.forEach((prog) => {
            prog.style.width = prog.dataset.prog;

            let num = prog.parentElement.parentElement.querySelector("h3 span")
            // console.log(num)
            let count = setInterval(() => {
                num.innerHTML = prog.dataset.prog 
                if (num.innerHTML == prog.dataset.prog) {
                    clearInterval(count)
                }
            }, 300)

        })

        

    }
    // let windowBottomOffset = window.pageYOffset + window.innerHeight;

    let statsBottomOffset = statsSection.offsetTop + statsSection.offsetHeight

    if (windowBottomOffset >= statsBottomOffset) {

        if (!started) {
            
            let nums = document.querySelectorAll(".stats .number")

            nums.forEach((num) => {

                let counter = setInterval(() => {

                    num.textContent++

                    if (num.textContent == num.dataset.num) {

                        clearInterval(counter)

                    }
                }, 2000 / num.dataset.num);
            })
        }

        started = true;


    }
}
// end skills

// start events

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();


let countdown = setInterval(() => {

    let dateNow = new Date().getTime();

    let datedeff = countDownDate - dateNow;

    let days = Math.floor(datedeff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datedeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((datedeff % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((datedeff % (1000 * 60)) / 1000);

    // console.log(hours)

    document.querySelector(".events .time .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (datedeff <= 0) {
        clearInterval(countdown)
    }

}, 1000);


// end events
// start stats







// end stats 