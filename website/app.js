/* Global Variables */
  //-----------Geting Today's date dynamically using javaScript/-------------
let date = new Date();
let todayDate = date.getMonth + 1 + '.' + date.getDate() + '.' + date.getFullYear();
  
  //Variables needed update date /time of the day for the top banner  */
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateDiv = document.querySelector("#dateHeader");
const hoursDiv = document.querySelector("#hours");
const minsDiv = document.querySelector("#minutes");
const secsDiv = document.querySelector("#seconds");

  //-----------variables for wrong or missing zip code or feelings/-------------
const zipCodeErrElem = document.querySelector('#zipError');
const feelingsErrElem = document.querySelector('#feelingError');

  //-----------variables for weather web API endpoint/-------------
    //---------- 1- apikey to set my weather api key i get-------
    //---------- 2- GenerateTemp to hold gotten the button responsible of 
     //           generating today's temperature -------

const apiKey = "f325fb3fff08a6b2f533da2f9769fb54";
const GenerateTempBtn = document.querySelector('#generate');

/******** End of Global Variables */
/****** Event Listeners to existing HTML DOM elements */
 
  //---------- Adding event Lister to the click of generate Temp button-------
GenerateTempBtn.addEventListener('click', async () => {
  //---------- First we get the zipcode and feelings values -----
  const zipCode = document.querySelector('#zip').value;
  const feeling = document.querySelector('#feelings').value;
  if (zipCode == "" || zipCode == null) {
    zipCodeErrElem.style.visibility = 'visible';
    zipCodeErrElem.textContent = "*Zip code can't be empty";
  }
  else if (isNaN(Number.parseInt(zipCode))) {
    alert('in else if(isNaN)');
    zipCodeErrElem.style.visibility = 'visible';
    zipCodeErrElem.textContent = "*Zip code should be a number";
  }
  else {
    zipCodeErrElem.style.visibility = 'hidden';
  }
  if (feeling == "" || feeling == null) {
    feelingsErrElem.style.visibility = 'visible';
    feelingsErrElem.textContent = "*Feeling can't be empty";
  }
  else {
    feelingsErrElem.style.visibility = 'hidden';
  }
  if (feeling != "" && feeling != null && zipCode != "" && zipCode != null && isNaN(Number.parseInt(zipCode)) == false) {
    const fullWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    try {
      getTemperature(fullWeatherApiUrl, zipCode, feeling)
        .then((zipCode, feeling, projectData) => {
          postProjectData("/addWeather", { weatherData: projectData });

        });
    } catch (err) {
      console.log('in catch');
    }
  }

});
 //---------- Adding event Lister to the change of zip code change text
 const zipcodeInput = document.querySelector("#zip");
 zipcodeInput.addEventListener('change',()=>{
   document.querySelector("#recentEntry").style.visibility = "hidden";
 });
  // ***********Function to GET Web API Data*****************
async function getTemperature(fullWeatherApiUrl,zipCode , feeling){
  try {
    const response = await fetch(fullWeatherApiUrl, { method: "GET", credentials: "same-origin" });
    if (response.status === 400 || response.status === 404) {
      console.log('in if response status =404');
      zipCodeErrElem.textContent = 'please, enter a valid zip code';
      zipCodeErrElem.style.visibility = 'visible';
    }
    else {
      zipCodeErrElem.style.visibility = 'hidden';
      const weatherData = await response.json();
      const temp = weatherData.main.temp;
      updateUI(weatherData, zipCode, feeling);
      return weatherData;
    }
  } catch (err) {
    zipCodeErrElem.textContent = 'Please, enter a valid zip code';
    zipCodeErrElem.style.visibility = 'visible';
  }
}

  // *****************Function to POST data *****************
async function postProjectData(url = '', zipCode, feeling, projectData = {}) {
  const response = await fetch(url, {
    method: "POST",
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  try {
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("error in post function", error);
  }
}
  //***************** Function to dynamically show weather
      //data to the user after fetching it from the weather application *****************
  function  updateUI(weatherData,zipCode,feeling){
   document.querySelector("#recentEntry").style.visibility = "visible";
   
   console.log('in updateUI weather data',weatherData);
   document.querySelector("#temp").innerHTML =  weatherData.main.temp 
     + " °C";
    //-------this to display user feeling under the temp in the header of the 
       // 'recent entry section------
     if(feeling.length < 10)
     {
       document.querySelector("#contentHead").innerHTML = feeling;
     }
     document.querySelector("#content").innerHTML ="Feeling is: " + feeling;
   document.querySelector("#place").innerHTML = weatherData.name
     +", " + weatherData.sys.country;
     document.querySelector("#date").innerHTML =  getDateDay();
     
     document.querySelector("#restInfo").innerHTML = "Humidity: " + weatherData.main.humidity + "%"
     +"<br>" + "Wind: " +  weatherData.wind.speed + " km/h";
 
     document.querySelector("#maxTemp").innerHTML = "max: " + weatherData.main.temp_max + " °C";
     document.querySelector("#minTemp").innerHTML = "min: " + weatherData.main.temp_max + " °C";
     document.querySelector("#feelsLike").innerHTML = "feels like: " + weatherData.main.feels_like + " °C";   
  };

  //----------Event listerner On page load to set the
    //date information of the top-banner -----------------
window.addEventListener('load',setBannerDate);

/* set Interval function to update top-banner seconds and minutes */
let secOutID = setInterval( setBannerDate , 1000);

/* End of Event Listeners to existing HTML DOM elements */
/* Functions called by event listener */
  //---------- setBannerDate function called on *page load* 
            // set the date information of the top-banner--------------  
async function setBannerDate() {
  date = new Date();
  let hour12 =  date.getHours();
  dateDiv.textContent =  getDateDay();
  if(date.getHours()>=12){
    hour12 =  date.getHours()-12;
  }
  hoursDiv.innerHTML = hour12 + '<br>HRS';
  minsDiv.innerHTML = date.getMinutes() + '<br>MINS';
  secsDiv.innerHTML = date.getSeconds() + '<br>SECS';
}
 function getDateDay(){
  const dayDate =
  monthNames[date.getMonth()] + ' '
  + date.getDate() + ' '
  + date.getFullYear();
  return dayDate;
}





