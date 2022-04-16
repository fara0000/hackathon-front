import axios from 'axios';
import * as sessionUrls from '../urls';
import {getAutoSessions} from "../urls";

export const getSessionApi = (token: string | null) => {
    return axios.get(sessionUrls.getAutoSessions, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('getAllBooksApi error:', err))
};
