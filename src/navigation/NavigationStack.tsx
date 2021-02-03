import React from 'react';
import { createStackNavigator, StackNavigationProp, TransitionPresets } from '@react-navigation/stack';
import ScreenLogin from '../ui/screen/auth/ScreenLogin';
import { RouteProp } from '@react-navigation/native';
import ScreenRegister from '../ui/screen/auth/ScreenRegister';

export enum AppScreens {
    HOME = 'SCREEN-HOME',
    LOGIN = 'SCREEN-LOGIN',
    REGISTER = 'SCREEN-REGISTER',
};

export type AppStackParamList = {
    [AppScreens.HOME]: undefined,
    [AppScreens.LOGIN]: undefined,
    [AppScreens.REGISTER]: undefined,
};

const Stack = createStackNavigator<AppStackParamList>();

export const AuthNavigationStack = () => (
    <Stack.Navigator
        headerMode='none'
        screenOptions={{
            ...TransitionPresets.SlideFromRightIOS
        }}
        initialRouteName={AppScreens.LOGIN}>
        <Stack.Screen name={AppScreens.LOGIN} component={ScreenLogin} />
        <Stack.Screen name={AppScreens.REGISTER} component={ScreenRegister} />
    </Stack.Navigator>
);

export interface NavigationProps<S extends AppScreens> {
    navigation: StackNavigationProp<AppStackParamList, S>,
    route: RouteProp<AppStackParamList, S>,
}