const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getLinks);
router.post("/", controller.addLink);
router.delete("/:id", controller.deleteLink);
router.get("/:id", controller.getLinkById);
router.put("/:id", controller.updateLink);

module.exports = router;
