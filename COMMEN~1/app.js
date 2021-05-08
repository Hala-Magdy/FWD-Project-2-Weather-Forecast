/* Global Variables */
//-----------Geting Today's date dynamically using javaScript/-------------
let date = new Date();
let todayDate = date.getMonth + 1 + '.' + date.getDate() + '.' + date.getFullYear();
/*Variables needed update date /time of the day in the upper banner  */
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateDiv = document.querySelector("#date");
const hoursDiv = document.querySelector("#hours");
const minsDiv = document.querySelector("#minutes");
const secsDiv = document.querySelector("#seconds");

/*-----------variables for weather web API endpoint/-------------
    ---------- 1- apikey to set my weather api key i get-------
    ---------- 2- GenerateTemp to hold gotten the button responsible of 
                generating today's temperature -------
*/
const apiKey = "f325fb3fff08a6b2f533da2f9769fb54";
const GenerateTempBtn = document.querySelector('#GenerateTemp');

/* End of Global Variables */
/* Event Listeners to existing HTML DOM elements */
  //---------- Adding event Lister to the click of generate Temp button-------
GenerateTempBtn.addEventListener('click', async () => {
  const demoDiv = document.querySelector('#demo');
  demoDiv.textContent = 'in btn event listerner';
  //---------- First we get the zipcode and feelings values -----
  const zipCodeErrElem = document.querySelector('#zipError');
  const feelingsErrElem = document.querySelector('#feelingError');
  const zipCode = document.querySelector('#zip').value;
  const feeling = document.querySelector('#feelings').value;
  
  if(zipCode == "" || zipCode == null){
    zipCodeErrElem.style.visibility = 'visible';
    zipCodeErrElem.textContent = "*Zip code can't be empty";
  }
  else if(isNaN(Number.parseInt(zipCode))){
    alert('in else if(isNaN)');
    zipCodeErrElem.style.visibility = 'visible';
    zipCodeErrElem.textContent = "*Zip code should be a number";
  }
  else{
    zipCodeErrElem.style.visibility = 'hidden';
  }
  if(feeling==""||feeling==null){
    feelingsErrElem.style.visibility = 'visible';
    feelingsErrElem.textContent = "*Feeling can't be empty";
  }
  else{
    feelingsErrElem.style.visibility = 'hidden';
  }
  if(feeling != "" && feeling !=null && zipCode !="" && zipCode!=null && isNaN(Number.parseInt(zipCode))==false){
    getTemperatue();
  }
  else{
    
  }
});

//----------Event listerner On page load to set the date information of the top-banner  */
window.addEventListener('load',setBannerDate);

/* End of Event Listeners to existing HTML DOM elements */
/* Functions called by event listener */
  //---------- setBannerDate function called on *page load*  set the date information of the top-banner  */
function setBannerDate() {
  dateDiv.textContent =
    monthNames[date.getMonth()] + ' '
    + date.getDay() + ' '
    + date.getFullYear();
  hoursDiv.innerHTML = date.getHours()-12 + '<br>HRS';
  minsDiv.innerHTML = date.getMinutes() + '<br>MINS';
  secsDiv.innerHTML = date.getSeconds() + '<br>SECS';
}

/* set Interval function to update top-banner seconds and minutes */
let secOutID = setInterval(async function secInterval() {
  date = new Date();

  if (date.getSeconds() == 0) {
    const demo = document.querySelector("#demo");
    demo.innerHTML = date.getMinutes() + '<br>MINS';
    minsDiv.innerHTML = date.getMinutes() + '<br>MINS';
  }
  secsDiv.innerHTML = date.getSeconds() + '<br>SECS';
}, 1000);

/* Function to GET Web API Data*/
async function getTemperature(){
  try{
    const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?zip={${zipCode}},{country code}&appid={${apiKey}}`);
    if(response.status == 400 || response.status == 404){
      alert('please, enter a valid zip code');
    }
    else{
      const data = await response.json();
      return data.main.temp;
    }
  }catch(err){
    console.log(err);
  }
alert('in getTemperatue function');

}

/* Function to POST data */


/* Function to GET Project Data */





