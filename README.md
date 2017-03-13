## Install

We need Node.js 6.x to be installed. 
Clone this respository, then

> npm install

## Webpack Server

> npm start


## API Server

We have API server that provides GET, PUT, POST and DELETE methods, handles CORS, Authentication.

The code for api-server located in /server/api-server.js
and the backend is a simple json file /server/db.json

To start API server, run the below command, this starts api-server at port 7070

> npm run api

we have below apis, products are taken from wikipedia smart phone page

    1. /api/products
    2. /api/brands
    3. /api/cities
    4. /api/states
    
we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 2-8 seconds delay before response.

    1. /delayed/api/products
    2. /delayed/api/brands
    3. /delayed/api/cities
    4. /delayed/api/states

### Authentication

Note, Authentication is not enabled by default.
We have basic oauth authentication for api-server, which can be 
enabled on need basis by running below command 

To run the server with authentication, we need below command
 
   > npm run api-with-auth

We have three users with hardcoded password.

    staff: staff
    password: staff

    username: user
    password: user

    username: admin
    password: admin

To Authenticate with the server, the client should call below api

    POST http://localhost:7070/oauth/token

must send url-form encoded key/values, with 'username' and 'password' field


Server validate username and password, send JSON reply with serialized user object (without password), user id, JWT Token.

After Authentication, the client should send "Authorization" with Bearer scheme

    Example:

    Authorization: Bearer flfkalsdjflkajdfalflkjdslkfjaslk.kfalsjdklfajsl

    
== Cors ==

Cors is included by default, to disable Cors, command line "noCors" while running the server. We disable cors for demonstration purpose.

       > npm run api-nocors
