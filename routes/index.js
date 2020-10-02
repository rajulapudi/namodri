var express = require("express");
var router = express.Router();
const ExpressRedisCache = require("express-redis-cache");
const cache = ExpressRedisCache();

router.get("/", cache.route(), function (req, res, next) {
  res.render("index");
});
router.get("/schemes", cache.route(), function (req, res, next) {
  res.render("schemePage");
});
router.get("/about", cache.route(), function (req, res, next) {
  res.render("aboutPage");
});

module.exports = router;
