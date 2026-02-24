import { MongoClient } from 'mongodb'

let db;

export const connectMongo = async (uri, dbName) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.log('No se pudo conectado a MongoDB 😒');
        console.error(error);
    }
}

export const getDb = () => db; 