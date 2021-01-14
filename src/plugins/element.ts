import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/ko'
import locale from 'element-plus/lib/locale'

export default (app: any) => {
  locale.use(lang)
  app.use(ElButton)
}
