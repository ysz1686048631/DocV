
import {{ compName }} from './{{ compName }}.vue';

export const Plugin = {
  install(app) {
    app.component('v-{{ compClassName }}', {{ compName }});
  },
};

export {
  {{ compName }},
};