# i2x-challenge

# About the project

I used, react.js, gulp watch, I18n for translation of labels and material-ui for the designer

# Install

You should have npm installed on your local machine, the node comes with npm so if you want you can install it from the official node website.
Clone the project on your local machine (git clone https://github.com/neomartins/i2x-challenge), open command prompt (cmd) go to the path where you download the project, go inside i2x-challenge. Run npm install this will install all the depdencies to run the project.
After this the project is ready to run, email and password are required to login to the system.

Email: "challenge@i2x.ai",
Password: "pass123".

This will perform a POST to https://i2x-challenge.herokuapp.com/core/login/ , returning an access token. With this token we can retrieve the list of songs. GET from https://i2x-challenge.herokuapp.com/ai/recording/list/. 
Which will be shown as a list.

"Final_script": "transcript text", # as simple text

 "Rating": 4, # as a star rating
 
 "Duration": 920, # e.g. 920 seconds could be displayed as 15 minutes
 
 "Url": "url_to_audio", # as a playable element
 
 "Created": "date_string" # human readable date (CET), which will be displayed inside a papper.
 

# Deploy 

To deploy you just need to run gulp watch, and the web page will open. (localhost:4000/#/).
