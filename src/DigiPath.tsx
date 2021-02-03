import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent, CSSProperties } from 'react';
import { AuthNavigationStack } from './navigation/NavigationStack';
import ScreenSplash from './ui/screen/ScreenSplash';

interface Props {
    style?: CSSProperties
}
interface State {
    showSplash: boolean
}

export default class DigiPath extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { showSplash: true };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ showSplash: false });
        }, 2000);
    }

    render() {
        return this.state.showSplash
            ?
            <ScreenSplash />
            :
            <NavigationContainer>
                <AuthNavigationStack />
            </NavigationContainer>
    }

}