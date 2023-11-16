const express= require('express')
const router =express.Router()

const nilaiController =require('../controller/nilai')

router.get('/nilaiAll', nilaiController.getAll)
router.get('/nilai', nilaiController.getOne)
router.post('/nilai', nilaiController.create)
router.put('/nilai:id', nilaiController.update)
router.delete('/nilai:id', nilaiController.delete)

module.exports = router
