const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.get("/",protect,getGoals)
router.post("/",protect,getGoals)
router.delete("/:id",protect,deleteGoal)
router.put("/",protect, updateGoal)

module.exports = router