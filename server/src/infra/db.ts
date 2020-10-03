import mongoose from "mongoose";

const uri: string = process.env.DB_PATH || "";

export const connect = async (): Promise<void> => {
  console.log("getConnection");
  console.log(uri);
  mongoose
    .connect(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      return console.info(`Successfully connected to ${uri}`);
    })
    .catch((error) => {
      console.error(`Error connecting to database: ${error}`);
      return process.exit(1);
    });
};
