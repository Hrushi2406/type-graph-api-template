import { IDependencies } from "../../application/abstracts/dependencies_interface";
// import { AuthService } from "../../application/use_cases/auth_services/auth_service";

export class AuthServiceController {
  //Auth Service Use Case
  // private authService: AuthService;

  //constructor
  constructor(public dependencies: IDependencies) {
    // this.authService = new AuthService(dependencies);
  }

  //login
  async login({ email, password }: { email: string; password: string }) {
    //extracting Auth service
    // const { authService } = this;
    return "DAS";

    // const token: string = await authService.login(email, password);

    // return { token };
  }
}
