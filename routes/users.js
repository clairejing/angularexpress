let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send("This message from users router");
});


module.exports = router;