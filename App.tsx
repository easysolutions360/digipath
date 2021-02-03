import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DigiPath from './src/DigiPath';
import { AppTheme } from './src/utils/theme';

//declare const global: {HermesInternal: null | {}};

export default class App extends PureComponent {
  render() {
    return (
      <PaperProvider theme={AppTheme} settings={{ icon: props => <IonIcon {...props} /> }}>
        <StatusBar barStyle="light-content" backgroundColor={AppTheme.colors.primaryDark} />
        <DigiPath/>
      </PaperProvider>
    );
  }
}
