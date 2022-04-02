const mongoose = require('mongoose');
const host = process.env.DB_HOST || "127.0.0.1";
let dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');
// if (process.env.NODE_ENV === 'production') {
//     dbURI = process.env.MONGODB_URI;
// }

// avoid 'current Server Discovery  and Monitoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

// console.log("Here is the connection request!");
// console.log("Attempting to connect to ", dbURI)
// const connect = () => {
//     setTimeout(() => mongoose.connect(dbURI, {
//         useNewUrlParser: true,
//         useCreateIndex: true
//         }), 1000);  
// }

mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useCreateIndex: true
            });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Moongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through ${msg}');
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', () => {
    pracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require("./models/travlr");
