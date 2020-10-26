import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // default - only for display purposes
      },
    theme: {
        themes: {
          light: {
            primary: '#F87502',
            secondary: '#CACC54',
            accent: '#FBBF8B',
            error: '#FC6F6F',
            info: '#888C8F'
          }, 
        },
      },
});
