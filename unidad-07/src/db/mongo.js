import { MongoClient } from 'mongodb'

let db;

export async function connectMongo (uri, dbName)  {
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

export function getDb() {
    return db;
}