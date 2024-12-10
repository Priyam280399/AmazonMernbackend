// const mongoose = require("mongoose");
// const db = 'process.env.DATABASE';

// // mongoose.connect(DB).then(()=>console.log("database connected")).catch(error)=>console.log("error"+ error.message))


// // const mongoose = require('mongoose');

// // mongoose.connect('mongodb://localhost/codeial_development');

// // const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });


// module.exports = db;

// const mongoose = require('mongoose');
// // const db = 'process.env.DATABASE';
// mongoose.connect('mongodb+srv://gudun28032000:f9mFQYzlzsJVEOid@cluster0.pelpe4o.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//   // Your code here after successful connection
// });
// module.exports = db;

// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://gudun28032000:f9mFQYzlzsJVEOid@cluster0.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//   // Your code here after successful connection
// });
// module.exports = db

// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://gudun28032000:2Ru3dQ2l82HH6EPL@cluster0.u8zd1.mongodb.net/'
           


//  mongoose.connect(uri)

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//   // Your code here after successful connection
// });
// module.exports = db

const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb+srv://gudun28032000:2Ru3dQ2l82HH6EPL@cluster0.u8zd1.mongodb.net/'

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,        // Use the new URL parser to avoid deprecation warnings
    useUnifiedTopology: true,    // Use the new server discovery and monitoring engine
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Get the default connection
const db = mongoose.connection;

// Event listeners for additional error handling
db.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
});

// Handle successful connection
db.once('open', () => {
    console.log('MongoDB connection is open and ready');
});

// Export the connection
module.exports = db;

