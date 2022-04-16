import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {RegistrationFormValues, JwtType, AxiosResponse, LoginFormInitialValues} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as sessionApi from '../../api/session';
import { useHistory } from "react-router-dom";
import { errorToast } from "../../components/alerts/fail";

const sessionObj = {
    bet: 0,
    currentPrice: 0,
    customerName: "",
    end: "",
    id: 0,
    lastCustomerBet: "",
    location: "",
    sessionName: "",
    start: "",
    status: ""
}

export interface session {
    bet: number,
    currentPrice: number,
    customerName: string,
    end: string,
    id: number,
    lastCustomerBet: string,
    location: string,
    sessionName: string,
    start: string,
    status: string
}

class SessionsStore {
    sessionData: session[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getSessionData = (token: string | null) => {
        return sessionApi.getSessionApi(token).then(res => res);
    }
}

export default new SessionsStore();
