import {account} from './appwrite.js'


export const getSession = async ()=>{
    try {
        const response = await account.getSession(
                            'current' // sessionId
                        );
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteSession = async ()=>{
    try{
        const response = await account.deleteSession('current');
        return response;
    }
    catch(error){
        throw new Error(error.message)
    }
}