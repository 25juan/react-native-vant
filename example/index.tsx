import { Navigation } from 'react-native-navigation';
import Component from './src/pages/Component';
import Tool from './src/pages/Tool';
import Template from './src/pages/Template';

Navigation.registerComponent('Component', () => Component);
Navigation.registerComponent('Tool', () => Tool);
Navigation.registerComponent('Template', () => Template);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Component',
            },
          },
        ],
      },
      bottomTabs: {
        id: 'BOTTOM_TABS',
        children: [
          {
            stack: {
              id: 'COMPONENT_TAB',
              children: [
                {
                  component: {
                    id: 'Component',
                    name: 'Component',
                  },
                },
              ],
              options: {
                topBar: {
                  elevation: 0,
                  title: {
                    text: '组件',
                    alignment: 'center',
                  },
                },
                bottomTab: {
                  icon: require('./src/icons/component.png'),
                  text: '组件',
                  selectedIcon: require('./src/icons/component_select.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'TOOL_TAB',
              children: [
                {
                  component: {
                    id: 'TOOL',
                    name: 'Tool',
                  },
                },
              ],
              options: {
                topBar: {
                  elevation: 0,
                  title: {
                    text: '工具',
                    alignment: 'center',
                  },
                },
                bottomTab: {
                  icon: require('./src/icons/js.png'),
                  text: '工具',
                  selectedIcon: require('./src/icons/js_select.png'),
                },
              },
            },
          },

          {
            stack: {
              id: 'TEMPLATE_TAB',
              children: [
                {
                  component: {
                    id: 'TEMPLATE',
                    name: 'Template',
                  },
                },
              ],
              options: {
                topBar: {
                  elevation: 0,
                  title: {
                    text: '模板',
                    alignment: 'center',
                  },
                },
                bottomTab: {
                  icon: require('./src/icons/template.png'),
                  text: '模板',
                  selectedIcon: require('./src/icons/template_select.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
});
