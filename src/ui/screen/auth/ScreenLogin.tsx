import React, { PureComponent, CSSProperties } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput, Title, withTheme } from 'react-native-paper';
import { AppScreens, NavigationProps } from '../../../navigation/NavigationStack';
const nicImage = require('../../../assets/images/nic.png');

interface Props extends NavigationProps<AppScreens.LOGIN> {
    style?: CSSProperties,
    theme: ReactNativePaper.Theme
}
interface State {
    //
}

class ScreenLogin extends PureComponent<Props, State> {

    private _onLoginPress = () => {
        //
    }
    private _onRegisterPress = () => {
        this.props.navigation.navigate(AppScreens.REGISTER);
    }

    render() {
        const { primaryDark } = this.props.theme.colors;
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, minHeight: 500,backgroundColor:'#fff' }}>
                <View style={{ flexGrow: 1, alignItems: 'center' }}>
                    <Image
                        source={nicImage}
                        style={{ height: 120, width: '90%' }} />
                    <Title style={{ backgroundColor: primaryDark, ...styles.title }}>
                        Welcome to DIGI PATH
                    </Title>
                    <View style={styles.inputContainer}>
                        <TextInput
                            mode='outlined'
                            right={<TextInput.Icon name="mail-outline" size={28} color="gray" />}
                            placeholder="Mobile No. / Email" />
                        <TextInput
                            style={{ marginTop: 12 }}
                            placeholder="OTP"
                            secureTextEntry={true}
                            mode='outlined'
                            right={<TextInput.Icon name="shield-outline" size={28} color="gray" />} />
                        <Button
                            style={{ marginTop: 16 }}
                            mode='outlined'
                            onPress={this._onLoginPress}
                            contentStyle={{ backgroundColor: primaryDark, borderRadius: 0, height: 45 }}
                            labelStyle={{ color: '#fff' }}>
                            LOGIN
                        </Button>
                    </View>
                    <Button
                        style={{ marginTop: 16, width: '90%' }}
                        mode='text'
                        onPress={this._onRegisterPress}>
                        REGISTER
                        </Button>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        fontSize: 22,
        textAlign: 'center', color: '#fff', paddingVertical: 8
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 22,
        marginTop: 60,
        backgroundColor: '#eb2126'
    }
});

export default withTheme(ScreenLogin);