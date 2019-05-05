import { Loadable } from 'utils/components'

export default {
  path: 'user-cases',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'UserCases' */ './components/UserCasesPage')
  })
}
