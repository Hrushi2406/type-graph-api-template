import { IUserRepository } from "./user_repository_interface";
import { IAccessTokenManager } from "./access_token_manager_interface";
import { IEncrypter } from "./encrypter_interface";

export interface IDependencies {
  userRepository: IUserRepository;
  encrypter: IEncrypter;
  accessTokenManager: IAccessTokenManager;
}
