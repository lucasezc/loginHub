const path = require("path");



const goIndex = (req, res) => {
    const filePath = path.join(__dirname, "../../client/html/index.html");
    res.sendFile(filePath);
}




module.exports = {
    goIndex
}


