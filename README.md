# Weather-Journal App Project

## Overview
This project entitled "Weather-Journal App". This App aims to display the day's weather information (such as temperature) to the user according to his location (we consider his location can be deduced from his zip code).

In this project we 
    1- get the zip code from the user 
    2- communicate with "penweathermap.org" API [while applying "an asynchronous web app" concept]
    3- then we dynamically UI by displaying the temperature along with other weather(such as max-temperature, min-temperature, humidity, wind speed, user city, and country) information.

## Instructions
For using and running this project especially to run node in this project you need to install `nodemon` package first using the command `npm install nodemon`, then install `express, body-parser, and cors` packages using the command `npm install express body-parser corss`.

this project main files and dependencies
    1-`server.js` [contains the server-side code]
    2-`index.html` represents the user main page in which we get data from the user (such as zip code) and display the weather information. 
    3-`app.js` (can be found under the 'website' folder like `website/app.js`), which represents the app client-side (middleware between user UI and the server). 
    4-`style.css` contains the required styling for the user UI
    5-`website/images/`Images folder inside the website folder contains project images and icons (should be included and downloaded).
    
## Structure and functionality
1]---validation added to the App 
    i- validation for empty 'zip code' and `feelings` which should be
        provided by the user
    ii- if the user entered an invalid `zip code` the user will be asked to enter a valid zip code

2]---In addition to the project requirement, we added extra features to make the app more reliable and user-friendly.

in the `index.html` in order t provide a more engaging user experience, we added
    1-`top banner` at the top of the page 
    --- which contains
        a) a welcome message to the user
        b) today's date and time (in order to update with the real-time while user using the app 
        --- in used javaScript function `set interval to update the time every second while user session not ended
        ---this function can be found in the `app.js`)
    2-`Most Recent Entry`section structure
        ---` Most Recent Entry` section is used to display the weather information according to the data used submitted (zip code and feelings).
        ---- in order to make `Most Recent Entry`section more engaging and looks somehow like well-known weather widgets, we made the `Most Recent Entry`structure as
        a) first row or the header displays divided into 3 parts or columns
            1) the first column at the header consists of 
                i. the `Temperature` icon
                ii. current `Temperature` 
                iii. the user entered `feelings`, in case it short text (less than 10 characters-- for design reasons)
            2) the second column at the header consists of 
                 . the `City` and `Country` of the entered zip code
            3) more information about the weather 
                 i. the `Humidity` 
                ii. current `Wind speed`
        b) the second row displays detailed information on the `Temperature`
            i. the current `max-Temperature` along with an icon
            ii. the current `min-Temperature` along with an icon
            iii. the `feels-like Temperature` along with an icon
        c) the third row displays detailed user-entered feelings along with an icon
    3-  `style.css`modified to handle user variable screen sizes(such as screen less than 300, less than 500px and 900px)

## Extras
this project ran and tested using 
    1. visual studio code 
    2. runned on chrome, mozzila browser 


