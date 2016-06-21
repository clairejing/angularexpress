let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
  res.send("This message is from index router");
});

module.exports = router;