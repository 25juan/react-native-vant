import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getRouteGroup, RouteItem } from './routes';
import { DemoBlock } from '../../components';
import { lightTheme } from '../../style/vars';

const routeGroup = getRouteGroup();

const Home = () => {
  const themeVars = lightTheme;

  const onLinkPress = (item: RouteItem) => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://img01.yzcdn.cn/vant/logo.png' }}
            style={styles.logo}
          />
          <Text style={[styles.title, { color: themeVars.text_color_2 }]}>
            RN Vant
          </Text>
        </View>
        {routeGroup.map((it) => (
          <DemoBlock title={it.name} key={it.name}>
            {it.list.map((item, idx) => (
              <TouchableOpacity
                style={[
                  styles.link,
                  idx === it.list.length - 1 && styles.linkLast,
                ]}
                key={item.href}
                onPress={() => onLinkPress(item)}
              >
                <View
                  style={[
                    styles.item,
                    { backgroundColor: themeVars.background_3 },
                  ]}
                >
                  <Text
                    style={[styles.text, { color: themeVars.text_color_3 }]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </DemoBlock>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
  },
  item: {
    alignItems: 'center',
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 16,
    width: '100%',
  },
  link: {
    height: 40,
    marginBottom: 12,
  },
  linkLast: {
    marginBottom: 0,
  },
  logo: {
    height: 32,
    width: 32,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 40,
  },
  title: {
    fontSize: 32,
    marginLeft: 16,
  },
  wrapper: {
    paddingBottom: 20,
  },
});

export default Home;
