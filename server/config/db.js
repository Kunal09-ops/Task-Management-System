// server/config/db.js


const connectDB = async () =>{




const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Database connection error:', err));
};






//2. 
// const mongoose = require('mongoose');
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (err) {
//         console.error(`Database connection error: ${err.message}`);
//         process.exit(1);
//     }
// };
// module.exports = connectDB;







// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB Connected');
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1);
//     }
// };

module.exports = connectDB;
