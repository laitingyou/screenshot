const router = require('koa-router')()
const GenetateController = require('../controller/GenetateController')

router.get('/generating',async (ctx, next)=>{
      let res = await new GenetateController().genetate()
      ctx.body = res
})

module.exports = router
