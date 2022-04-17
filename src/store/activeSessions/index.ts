import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {
    RegistrationFormValues,
    JwtType,
    AxiosResponse,
    LoginFormInitialValues,
    ProfileInfoValues
} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as activeSessionsApi from '../../api/activeSessions';
import { errorToast } from "../../components/alerts/fail";
import {convertDateToMinutes} from "../../utils/convertDate";

class ActiveSessionsStore {
    activeSessionsList: any = [];
    responseStatus: AxiosResponse = {
        code: undefined,
        message: '',
    };
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.getActiveSessionsInfo();
    }

    @action
    getActiveSessionsInfo = async () => {
        const token = localStorage.getItem('authToken');
        this.isLoading = true;
        return activeSessionsApi.getActiveSessionsApi(token).then(res => this.activeSessionsList = [...res]);
        this.isLoading = false;
    }

    // @action
    // saveUserProfileInfo = (token: string | null, userData: ProfileInfoValues) => {
    //     return profileApi.saveUserProfileInfoApi(token, userData).then(res => {
    //         if(res?.status === 200) {
    //             this.responseStatus = {
    //                 code: res.status,
    //                 message: 'Данные успешно изменились!'
    //             }
    //             return res;
    //         } else {
    //             this.responseStatus = {
    //                 code: res?.status,
    //                 message: res?.data
    //             }
    //         }
    //     });
    // }
}

export default new ActiveSessionsStore();
