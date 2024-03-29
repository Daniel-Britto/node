const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

// helpes
const checkAuth = require('../helpers/auth').checkAuth

router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/add', checkAuth, ToughtController.createTought)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/', ToughtController.showToughts)

module.exports = router