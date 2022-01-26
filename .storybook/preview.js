import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { options } from '@/plugins/vuetify'

// Set up Vuetify and create a vuetify instance
Vue.use(Vuetify)
const vuetify = new Vuetify(options)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Register vuetify instance in Vue options with decorators
export const decorators = [
  (story, context) => {
    const wrapped = story(context)
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `
        <v-app>
          <v-main>
            <wrapped />
          </v-main>
        </v-app>
      `
    })
  },
]
