let date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateDiv = document.querySelector("#date");
const hoursDiv = document.querySelector("#hours");
const minsDiv = document.querySelector("#minutes");
const secsDiv = document.querySelector("#seconds");
dateDiv.textContent =
            monthNames[date.getMonth()+1]+' '
            +date.getDay()+' '
            +date.getFullYear(); 
hoursDiv.innerHTML = date.getHours() + '<br>HRS' ;
minsDiv.innerHTML = date.getMinutes() + '<br>MINS' ;
secsDiv.innerHTML = date.getSeconds() + '<br>SECS';



let secOutID = setInterval(async function secInterval() {
  date= new Date();
  if(date.getSeconds()== 0){
    const demo = document.querySelector("#demo");
    demo.innerHTML = date.getMinutes() + '<br>MINS' ;
    minsDiv.innerHTML = date.getMinutes() + '<br>MINS' ;
  }
  secsDiv.innerHTML = date.getSeconds() + '<br>SECS';
}, 1000);