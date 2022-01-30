import prismaClient from "../../../databases/prismaCliente";
import AppError from "../../shared/errors/AppError";

export class ShowUserService {
  async execute(id) {
    const user = await prismaClient.users.findFirst({
      where: {
        id,
      }
    })

    if (!user) {
      throw new AppError("User does not exists.");
    }

    const userReturn = {
      name: user.name,
      email: user.email,
    }

    return userReturn;
  }
}

