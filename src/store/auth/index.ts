import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import { RegistrationFormValues, UserType } from '../../views/auth/types';
import { observer } from 'mobx-react-lite';

class AuthStore {
  user = {
    id: 0,
    name: '',
    role: '',
    surname: '',
  };
  synagogues = [];
  isLoading = false;
  isAuthorized = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setTokenToLocalStorage = (jwt: string, userInfo: any) => {
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("name", userInfo.name);
    localStorage.setItem("role", userInfo.role);
    this.isAuthorized = true;
  }

  @action
  deleteTokenFromLocalStorage = () => {
    localStorage.clear();
    this.isAuthorized = false;
  }

  @action
  setUser = (userData: UserType) => {
    console.log(userData, 'user');
    this.isLoading = true;
    this.user = {...userData};
    console.log(isObservable(this.user), '35')
  }

  @action
  getUser = () => {
    return this.user;
  }

  @action
  setIsAuthorized = (bool: boolean) => {
    this.isAuthorized = bool;
  }
}

export default new AuthStore();
