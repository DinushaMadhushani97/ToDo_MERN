//Connect to mongodb with server we build db.js

import mongoose from "mongoose";

const connectToDB = async () => {
    await mongoose.connect(process.env.Mongo_URI).then((res) => {
        console.log("Mongodb connected Successfully");
    });
};

export default connectToDB;