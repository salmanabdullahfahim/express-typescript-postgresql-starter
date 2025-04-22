import ApiError from "../app/errors/ApiError";
import prisma from "../app/shared/prisma";

export const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) throw new ApiError(404, "User Not Found");
  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      superAdmin: { select: { id: true } },
      admin: { select: { id: true } },
      careManager: { select: { id: true } },
    },
  });

  if (!user) throw new ApiError(404, "User Not Found");
  return user;
};
