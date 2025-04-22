import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthServices } from "./auth.services";
import sendResponse from "../../shared/sendResponse";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.login(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Logged In Successful.",
    data: result,
  });
});

export const AuthControllers = {
  login,
};
