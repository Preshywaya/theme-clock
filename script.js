const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["sunday", "monday", "tuesday", "wednsday", "thursday", "friday", "saturday"];

const months = ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug", "sep", "oct", "nov", "dec"];

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML ='light mode'
    }
})



function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursforclock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >12 ? 'pm' : 'am'

    hourEl.style.transform =` translate(-50%, -100%) rotate(${scale(hoursforclock,0, 11, 0, 360)}deg)`

    minuteEl.style.transform =` translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    secondEl.style.transform =` translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    

    timeEl.innerHTML = `${hoursforclock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}` 
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) *(out_max - out_min) / (in_max-in_min) + out_min;

    }


setTime()

setInterval(setTime,1000)
