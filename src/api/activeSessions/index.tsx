import axios from 'axios';
import * as activeSessionsUrls from '../urls';

export const getActiveSessionsApi = (token: string | null) => {
    console.log('q');
    return axios.get(activeSessionsUrls.getActiveSessions, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data.sessions)
        .catch((err) => console.log('getActiveSessionsApi error:', err))
};