import { DEV_PATH as path } from 'constants/paths'
import { Loadable } from 'utils/components'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'DevTasksPage' */ './components/DevTasksPage')
  })
}
