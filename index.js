
let CountEL = document.getElementById("count")
let guestEL = document.getElementById("guest-count")
let count = 0
let guestcount = 0
function homeadd1(){
    count += 1
    CountEL.innerText = count
}
function homeadd2(){
    count += 2
    CountEL.innerText = count
}
function homeadd3(){
    count += 3
    CountEL.innerText = count
}
function guestadd1(){
    guestcount += 1
    guestEL.innerText = guestcount
}
function guestadd2(){
    guestcount += 2
    guestEL.innerText = guestcount
}
function guestadd3(){
    guestcount += 3
    guestEL.innerText = guestcount 
}