import Vue from 'vue';
import Vuetify, { UserVuetifyPreset } from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

// Export the options. However, this time it is an empty object because no options are set.
export const options: Partial<UserVuetifyPreset> = {
  icons: {
    iconfont: 'md' || 'fa',
  },
};

export default new Vuetify(options);
