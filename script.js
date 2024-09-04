document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//  for date 

document.querySelector('#calender')
setInterval(function(){
    let date = new Date();
    calender.innerText = date.toLocaleDateString();
}, 1000);