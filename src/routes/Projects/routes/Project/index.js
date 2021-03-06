import { Loadable } from 'utils/components'

export default {
  path: ':type',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Project' */ './components/ProjectPage')
  })
}
