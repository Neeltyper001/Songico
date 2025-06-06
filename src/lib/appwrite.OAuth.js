import { FAILURE_REDIRECT, SUCCESS_REDIRECT } from '../constants/constants.url.js';
import {account} from './appwrite.js'
import { OAuthProvider } from 'appwrite';
export const oAuthSignin = ()=>{
    try {
        const response =  account.createOAuth2Session(
            OAuthProvider.Google, // provider
            SUCCESS_REDIRECT, // success (optional)
            FAILURE_REDIRECT, // failure (optional)
            [] // scopes (optional)
        );
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}
