import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import picturesActions from "./modules/item/Pictures/picturesActions";

router.get("/api/pictures", picturesActions.browse);

router.get("/api/pictures/:id", picturesActions.read);

router.post("/api/pictures", picturesActions.add);

router.delete("/api/pictures/:id", picturesActions.destroy);

router.put("/api/pictures/:id", picturesActions.edit);

export default router;
