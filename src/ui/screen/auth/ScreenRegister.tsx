import React, { PureComponent, CSSProperties } from 'react'
import { Image, ScrollView, View } from 'react-native';
import { Button, Caption, TextInput, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const nicImage = require('../../../assets/images/nic.png');

interface Props {
    style?: CSSProperties
}
interface State {
    //
}

export default class ScreenRegister extends PureComponent<Props, State> {


    private _onRegisterPress = () => {
        //
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, minHeight: 500, backgroundColor: '#fff' }}>
                <View style={{ flexGrow: 1, alignItems: 'center' }}>
                    <Image
                        source={nicImage}
                        style={{ height: 120, width: '90%', marginBottom: 20 }} />
                    <View
                        style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <TextInput
                            style={{ width: '48%', height: 45 }}
                            mode='outlined'
                            label="First Name" />
                        <TextInput
                            style={{ width: '48%', height: 45 }}
                            mode='outlined'
                            label="Last Name" />
                    </View>
                    <View
                        style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 18 }}>
                        <View style={{ width: '48%' }}>
                            <TextInput
                                style={{ height: 45 }}
                                mode='outlined'
                                keyboardType='phone-pad'
                                label="Contact No." />
                            <TextInput
                                style={{ height: 45, marginTop: 5 }}
                                mode='outlined'
                                keyboardType='phone-pad'
                                label="Contact No. (Optional)" />
                        </View>
                        <TouchableRipple
                            style={{ width: '40%', marginRight: 8, backgroundColor: '#CAD5E2', borderRadius: 8, }}
                            onPress={() => { }}>
                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 12 }}>
                                <Icon name='image-outline' size={30} color='gray' />
                                <Caption>Max Size 50 KB</Caption>
                            </View>
                        </TouchableRipple>
                    </View>
                    <TextInput
                        style={{ height: 45, width: '100%', marginTop: 18, paddingHorizontal: 10 }}
                        mode='outlined'
                        editable={false}
                        right={<TextInput.Icon style={{marginTop:15}} name="caret-down-outline" size={28} color="gray" />}
                        label="Department" />
                    <TextInput
                        style={{ height: 45, width: '100%', marginTop: 18, paddingHorizontal:10 }}
                        mode='outlined'
                        label="Designation" />
                    <TextInput
                        style={{ height: 45, width: '100%', marginTop: 18, paddingHorizontal: 10 }}
                        mode='outlined'
                        editable={false}
                        right={<TextInput.Icon style={{ marginTop: 15 }} name="caret-down-outline" size={28} color="gray" />}
                        label="Scheme" />
                    <TextInput
                        style={{ height: 45, width: '100%', marginTop: 18, paddingHorizontal: 10 }}
                        mode='outlined'
                        keyboardType="email-address"
                        label="Email" />

                    <Button
                    style={{marginTop:22,width:'50%'}}
                    mode='contained'
                    onPress={this._onRegisterPress}>
                        Register
                    </Button>
                </View>
            </ScrollView>
        );
    }

}