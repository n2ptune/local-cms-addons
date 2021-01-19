import {
  ElButton,
  ElCol,
  ElRow,
  ElContainer,
  ElAside,
  ElMain
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/ko'
import locale from 'element-plus/lib/locale'

export default (app: any) => {
  locale.use(lang)
  app.use(ElButton)
  app.use(ElCol)
  app.use(ElRow)
  app.use(ElContainer)
  app.use(ElAside)
  app.use(ElMain)
}
