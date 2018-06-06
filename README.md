# pollser
Polls app demo with real-time features. [Tutorial here](https://blog.pusher.com/building-realtime-polls-nodejs-pusher/)

## Description
The app's home page shows a list of polls. Voting for an option in a poll updates the number of votes displayed next to that option across all clients in real-time.

## Prerequisites
- Node.js (v6.0.0 or higher) 
- MongoDB (v3.4.0 or higher)
- A [Pusher account](https://pusher.com/signup) and a [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started
Clone the project:

```bash
git clone https://github.com/shalvah/pollser
```

Put your Pusher app credentials in a `.env` file in the project root:
```
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-app-cluster
```

Look for these lines of JavaScript in `views/index.hbs`:
```javascript
var pusher = new Pusher('YOUR_APP_KEY', {cluster: 'YOUR_APP_CLUSTER'});
```

Insert your Pusher app key and cluster in the appropriate places.

Start your MongoDB server by running `mongod`.

Then:

```bash
node bin/seed.js
npm start
```

## Built With

* [Pusher](https://pusher.com/) - APIs for building realtime features
* [Node.js](http://nodejs.org)
