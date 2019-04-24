import { Loadable } from 'utils/components'

export default {
  path: ':taskId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Project' */ './components/TaskPage')
  })
}
