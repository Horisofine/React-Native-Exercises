import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Exercise1 from '../execises/exercise1/Exercise1';
import Exercise2 from '../execises/exercise2/Exercise2';
import Exercise3 from '../execises/exercise3/Exercise3';
import Exercise4 from '../execises/exercise4/Exercise4';
import Exercise5 from '../execises/exercise5/Exercise5';
import Exercise6 from '../execises/exercise6/Exercise6';
import Exercise7 from '../execises/exercise7/Exercise7';

export default function ExerciseDrawer() {
    
    const Drawer = createDrawerNavigator();
    
    return (
        <Drawer.Navigator initialRouteName='Note App'>
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Counting Taps"
                component={Exercise1}
                options={{ drawerLabel: 'Counting Taps' }}
            />
            <Drawer.Screen
                name="Custom Component"
                component={Exercise2}
                options={{ drawerLabel: 'Custom Components' }}
            />
            <Drawer.Screen
                name="Styling"
                component={Exercise3}
                options={{ drawerLabel: 'Styling' }}
            />
            <Drawer.Screen
                name="Scrollable Content"
                component={Exercise4}
                options={{ drawerLabel: 'Scrollable Content' }}
            />
            <Drawer.Screen
                name="Input Form"
                component={Exercise5}
                options={{ drawerLabel: 'Input Form' }}
            />
            <Drawer.Screen
                name="Using fetch()"
                component={Exercise6}
                options={{ drawerLabel: 'Using fetch()' }}
            />
            <Drawer.Screen
                name="Note App"
                component={Exercise7}
                options={{ drawerLabel: 'Note App' }}
            />


        </Drawer.Navigator>
    )
}