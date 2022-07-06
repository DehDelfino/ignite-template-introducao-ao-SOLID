import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const userAlredyExits = this.usersRepository.findByEmail(email);

    if (userAlredyExits) {
      throw new Error("Mensagem do erro");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
