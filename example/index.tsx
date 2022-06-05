import { Navigation } from 'react-native-navigation';
import App from './src/App';

Navigation.registerComponent('com.example.reactnativevant', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.example.reactnativevant',
            },
          },
        ],
      },
    },
  });
});
