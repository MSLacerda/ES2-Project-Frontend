import { Loadable } from 'utils/components'

export default {
  path: 'statistics',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Statistics' */ './components/StatisticsPage')
  })
}
