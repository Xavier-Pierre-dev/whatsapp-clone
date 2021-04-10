# 🚀 Javascript Front-End 🚀

## Stack :
* React
* Firebase
* BEM naming convention

### Features :
* Google authentification using firebase
* Create room 
* Sending/Vew new message in realtime and store everything inside a firestore database

### Quick Started :
* Create `.env` file inside `/` within the following data
  - REACT_APP_API_KEY=`your api key`
  - REACT_APP_AUTH_DOMAIN=`your auth domain`
  - REACT_APP_PROJECT_ID=`your project ID`
  - REACT_APP_STORAGE_BUCKET=`your storage bucket`
  - REACT_APP_MESSAGING_SENDER_ID=`your messaging sender ID`
  - REACT_APP_APP_ID=`your APP ID`
  - REACT_APP_MEASUREMENT_ID=`your measurement ID`
* Go to Firebase Settings > General > Your apps > Firebase SDK snippet > Config and use the information for complete your `.env`
* Go to Firebase > authentification > sign-in method > enabled google authentification
* Go to Firebase > firestore > create a data 

Start the app : `npm start`

### Why this project :
I'm learning web development because that interest me. Now this project is created by learning from Clever Programmer (https://www.youtube.com/c/CleverProgrammer/featured) thanks to them for sharing free class on google. 
I choose this project because i find firebase can be a good thing for web development, that's allow us to work on front-end without need to care so much about back-end side. It's certainly a good point for be able to work on front end with database before working on the back-end with other stach like mongoDB, GraphQL, mongoose for exemple as long as we have a thinking about our data or keep communication with back-end developper during them work, to be sur the data and structure of them will be same. 

### What i learn and practice from this project :
  - BEM naming convention and i find this convention really great for when we want to make a new style of a component, we can easily see which modifiers and children already exist. Finally this convention make the process for writting css/html more clean and easier to understand. 
  - Quick set up a firebase database for work on the front end and also have some advantage in front of mongoose alone like realtime database and that's a requirement for doing chat or private message. 
  - Practicing React/javascript/hmtl/css 

### Some reflexion about the project and realtime database :
I think using mongoose with pusher.io or socket.io will allow to do realtime database too and i will take a look on that because i want add a private messenger on a social media project using MERN and i use mongoose for the back-end. An other stach for that, find with some research is GraphQL a lib whose allow us to use realtime database directly because it's working with socket behind the scene. This stach offer good dev tool whose will provide a good documentation of all our http request implemented from the back-end so i guess it's very nice feature because that's can allow us to write less documentation and then speed up the process of programming. 

  

