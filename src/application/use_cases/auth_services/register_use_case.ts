import { IAccessTokenManager } from "src/application/abstracts/access_token_manager_interface";
import { IEncrypter } from "src/application/abstracts/encrypter_interface";
import {
  IUser,
  IUserRepository,
} from "src/application/abstracts/user_repository_interface";
import User from "src/domain/entities/user";

export class RegisterUseCase {
  //Default constructor
  constructor(
    public accessTokenManager: IAccessTokenManager,
    public userRepository: IUserRepository,
    public encrypter: IEncrypter
  ) {}

  //Default executable function

  async call(args: any): Promise<string> {
    //Extracting values
    const { accessTokenManager, userRepository, encrypter } = this;

    //Extract from args
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = args;

    //Construct a new object of user
    const user: IUser = new User({
      name: name,
      email: email,
      password: password,
    });

    await user.validate();

    //Encrypte password with bcrypt
    user.password = await encrypter.encrypt(user.password);

    //Genereate a uniuque ID
    //   user.user_id = await

    //Add To Database
    await userRepository.registerUser(user);

    //Generate a JWT Token
    const token: string = await accessTokenManager.generate(user.user_id);

    //Log
    console.log("Token Generated Successfully " + token);

    //Return
    return token;
  }
}
