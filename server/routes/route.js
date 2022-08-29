const express = require('express');

const usr  = require('../controller/usercontroller') 

const router = express.Router();

router.post('/add',usr.addUser);
router.get('/all',usr.getUsers);
router.get('/:id',usr.getUser);
router.put('/:id',usr.editUser);
router.delete('/:id',usr.delUser);


module.exports = router;