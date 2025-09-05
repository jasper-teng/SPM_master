const express = require("express");
const router = express.Router();
const { dbHealthCheck, testCRUD } = require("../dbconnection");

// This is the general health check bullshit yeah u get it

router.get("/", async (req, res) => {
    console.log("it works");
    res.send("wallahi it works");
});

router.get("/dbconntest", async (req, res) => {
    var bruh = await dbHealthCheck().then(
        console.log(bruh)
    )
    var output = bruh ? "its fucked" : "its ok";
    res.send(output);
});

router.get("/testCRUD", async (req, res) => {
    var bruh = await testCRUD().then(
        console.log(bruh)
    )
    var output = bruh ? "its fucked" : "its ok";
    res.send(output);
});


router.get("/authtest", async(req, res) => {
    console.log("it works");
    res.send("you should be authorized to see this");
});



module.exports = router;
