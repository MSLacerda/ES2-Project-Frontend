import { Loadable } from 'utils/components'

export default {
  path: 'code',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Code' */ './components/CodePage')
  })
}
