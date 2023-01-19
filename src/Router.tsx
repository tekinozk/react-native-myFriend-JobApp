import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './Navigation/TabNavigation'
import {Store} from "./redux/store"
import { Provider } from 'react-redux'

function Router() {

  return (
    <Provider store={Store}>
<NavigationContainer>
<TabNavigation/>
</NavigationContainer>
    </Provider>
  )
  
}

export default Router