import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  //   client = await MongoClient.connect(
  //     `${process.env.API_MONGO_LOCATION}://${process.env.API_MONGO_USER}:${process.env.API_MONGO_PASS}` +
  //       `@${process.env.API_MONGO_URI}/${process.env.API_DB_NAME}?retryWrites=true&w=majority`,
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     }
  //   );
  client = await MongoClient.connect(
    "mongodb+srv://nitove8116:W3eYstxNzjI5jVnb@cluster0.gnhwssu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
