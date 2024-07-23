import Cors from "cors";
import initMiddleware from "./middleware";
// import initMiddleware from "./middleware";

const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default cors;
