import { connect } from "mongoose";
import config from "./config";

export const connectToDatabase = async () => {
  await connect(config.DatabaseUri)
    .then((conn) => {
      console.log(
        `Connection to database succeeded at ${conn.connection.host}:${conn.connection.port}`
      );
    })
    .catch((err) => {
      console.log(`Unable to connect to database`);
    });
};
