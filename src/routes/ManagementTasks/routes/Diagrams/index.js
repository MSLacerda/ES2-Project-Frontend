import { Loadable } from 'utils/components'

export default {
  path: 'diagrams',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Diagrams' */ './components/DiagramsPage')
  })
}
