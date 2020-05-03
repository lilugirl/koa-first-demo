import Router from 'koa-router'
import publicController from '../api/PublicController'

const router = new Router()

router.get('/getChaptcha', publicController.getChaptcha)

export default router