import React, { PureComponent, CSSProperties } from 'react'
import { Image, View } from 'react-native';
const nicLogo = require('../../assets/images/nic.png');

interface Props {
    style?: CSSProperties
}
interface State {
    //
}

export default class ScreenSplash extends PureComponent<Props, State> {

    render() {
        return (
            <View style={{ flexGrow: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ height: 150, width: '100%' }}
                    source={nicLogo} />
            </View>
        );
    }

}