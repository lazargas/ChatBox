import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-z19o2gq-shard-00-00.l1xbvus.mongodb.net:27017,ac-z19o2gq-shard-00-01.l1xbvus.mongodb.net:27017,ac-z19o2gq-shard-00-02.l1xbvus.mongodb.net:27017/?ssl=true&replicaSet=atlas-rbldx7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL, { useUnifiedTopology: true });
   console.log("Db succesfully connected");
    }catch(error){
        console.log("error while connecting database", error.message);
    }
}

export default Connection