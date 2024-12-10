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

const mongoose = require('mongoose');

const uri = 'mongodb+srv://gudun28032000:2Ru3dQ2l82HH6EPL@cluster0.pelpe4o.mongodb.net/<database>?retryWrites=true&w=majority&tls=true'
            

 mongoose.connect(uri)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Your code here after successful connection
});
module.exports = db
