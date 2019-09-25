# Guestbook Web Application

## build 
just clone the repo and run the following command in the root of the repo `docker-compose up --build`

## database 
The database contains 3 models 
1. User 
2. Message
3. Reply 

### User Model 
contains the user infromation and hashed password 
### Message Model 
Contains the text and owner of the message, and the owner is refernce to the user model 
### Reply Model 
Contains the text of the reply and the message, the owner of the reply, and those are references to the Message, and Reply Models respectivly. 

## Docker
I've used 3 images using docker compose, and those are 2 nodejs image for NodeJS app, and ReactJS app, and MongoDB
