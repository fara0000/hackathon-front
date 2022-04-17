import axios from 'axios';
import * as sessionUrls from '../urls';
import {getAutoSessions} from "../urls";

export const getActiveSessionApi = (token: string | null) => {
    return axios.get(sessionUrls.getActiveSessions, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data.sessions)
        .catch((err) => console.log('getAllBooksApi error:', err))
};
