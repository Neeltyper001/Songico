import { Client, Account, Databases , Permission , Role, Storage , Query, Functions} from 'appwrite';

export const client = new Client();

client
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("66f0f918000f44f949a0"); // Replace with your project ID
export const functions = new Functions(client)
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID } from 'appwrite';
export {Permission}
export {Role}
export {Query}