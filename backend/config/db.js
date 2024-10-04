import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saipanga678:DHE28USYuQwYnfiC@cluster0.9cdu1.mongodb.net/FOOD_DELIVERY').then(()=>console.log("DB Connected"));
}