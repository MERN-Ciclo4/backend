import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import connectDB from "./db/db.js";
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
import {config} from "dotenv";
config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connection with success");
    await app.listen(process.env.PORT || 5000, async () => {
      await server.start();
      server.applyMiddleware({app});
      console.log('servidor listo');

    });
  } catch (err) {
    console.log(err);
  }
};

start();
