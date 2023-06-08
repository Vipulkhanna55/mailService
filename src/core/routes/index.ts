import { Express } from "express";
import saveRoute from "./route";

function useRoute(app: Express) {
  app.use("/", saveRoute);
  return app;
}

export default useRoute;
