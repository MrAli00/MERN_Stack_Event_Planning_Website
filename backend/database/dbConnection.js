import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_APP_EVENT_MESSAGES" })
    .then(() => {
      console.log("Connected to MongoDB database!");
    })
    .catch((err) => {
      console.error("Error occurred while connecting to MongoDB:", err);
    });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection is open");
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Mongoose connection error: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection is disconnected");
  });
};
