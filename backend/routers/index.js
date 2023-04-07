const express = require("express")
const UserRouter = require("./userRouters")
const goalRouter = require("./goalRouters")

const router = express.Router()

router.use('/api/users',UserRouter)
router.use('/api/goals',goalRouter)



module.exports=router