import { IDependencies } from "../../abstracts/dependencies_interface";

export class IAuthService {
  //login usecase
  login: (email: string, password: string) => Promise<string>;

  //Register usecase
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<string>;
}

class AuthService implements IAuthService {
  //constructor
  constructor(public dependencies: IDependencies) {}

  //Loogin user
  login(email: string, password: string) {
    return Promise.reject("Not implemented");
  }

  //Register User
  registerUser(name: string, email: string, password: string) {
    return Promise.reject("Not implemented");
  }
}
