import { createBottomTabNavigator, BottomTabNavigationProp }
  from '@react-navigation/bottom-tabs'

import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'; //importando o icone usado no menu

import { Dashboard } from '../pages/Dashboard'
import { ListExpenses } from '../pages/ListExpenses'
import { SearchExpenses }
  from '../pages/SearchExpenses'
import { Colors } from 'react-native/Libraries/NewAppScreen';

  type AppRoutes = {
    dashboard: undefined
    listExpenses: undefined
    searchExpenses: undefined
  }

  export type AppNavigationRoutesProp =
  BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const theme = useTheme()
  
  return (
    <Navigator screenOptions={{
      headerShown: false,// usado para esconder o cabeçalho
      tabBarLabelPosition: 'beside-icon',//coloca o titulo do item na direita
      //tabBarShowLabel: false,//oculta o titulo dos itens na barra de baixo
      tabBarActiveTintColor: theme.colors.secondary,//define a cor do icone escolhido
      tabBarInactiveTintColor: theme.colors.text,//define a cor dos icones inativos
      tabBarStyle: {
        height: 80
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options = {{
          tabBarLabel:'Incluir',
          tabBarIcon:(({size, color}) => 
          <MaterialIcons //usando o icone importado
            name = 'add'
            size = {size}
            color={color}
            />
          )
        }}
      />

      <Screen
        name='listExpenses'
        component={ListExpenses}
        options = {{
          tabBarLabel:'Listar',
          tabBarIcon:(({size, color}) => 
          <MaterialIcons 
          name="list" 
          size = {size}
          color={color} />
          )
        }}
      />

      <Screen
        name='searchExpenses'
        component={SearchExpenses}
        options = {{
          tabBarLabel:'Pesquisar',
          tabBarIcon:(({size, color}) => 
          <MaterialIcons
            name = 'search'
            size = {size}
            color={color}
            />
          )
        }}
      />

    </Navigator>
  )

}