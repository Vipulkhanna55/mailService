import { Router } from "express";
import { mailController } from "../controller";
const route = Router();
route.post("/deliverMail", mailController);
export default route;

