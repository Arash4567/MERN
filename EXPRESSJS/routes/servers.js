import { Router } from "express";
import { getAll } from "../controllers/servers.js";

const router = Router();

// router.get("/api/server", (req, res) => {
//   res.json({ name: "Mark", age: 24 });
// });

router.get("/api/server", getAll);

export default router;
