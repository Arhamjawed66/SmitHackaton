import mongoose from "mongoose";

export const dbconnect = async () => {
    try {
   let connection= await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
}