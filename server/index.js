//IMPORT FROM PACKAGES
const express = require("express");//importing express
const mongoose = require("mongoose");
const User = require("./models/user");

//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//INITIALIZATION
const PORT = 3000;//this is a template
const app = express();
const DB = "mongodb+srv://<>@cluster0.s4rbcq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


//CONNECTIONS
mongoose
    .connect(DB)
    .then(() => {
    console.log('Connection Successful')
}).catch( (e) => {
    console.log(e);
});



app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});

