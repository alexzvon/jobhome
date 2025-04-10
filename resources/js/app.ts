/// <reference types="vite/client" />

import '../css/robotocondensed.css'
import '../css/app.css'
import "quasar/src/css/index.sass";

import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import icon libraries
// import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
// import '@quasar/extras/material-icons/material-icons.css'
// import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
// import '@quasar/extras/material-icons-round/material-icons-round.css'
// import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
// import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
// import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
// import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
// import '@quasar/extras/mdi-v7/mdi-v7.css'
// import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
// import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// import '@quasar/extras/ionicons-v4/ionicons-v4.css'
// import '@quasar/extras/eva-icons/eva-icons.css'
// import '@quasar/extras/themify/themify.css'
// import '@quasar/extras/line-awesome/line-awesome.css'
// import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css


import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from 'vue'

// import { ZiggyVue } from '../../vendor/tightenco/ziggy'
// import { ZiggyVue } from 'ziggy-js'

import { Quasar, Cookies, SessionStorage, Notify } from "quasar"
import quasarLang from 'quasar/lang/ru'

import type { DefineComponent } from 'vue';

// Extend ImportMeta interface for Vite...
declare module 'vite/client' {
    interface ImportMetaEnv {
        readonly VITE_APP_NAME: string;
        [key: string]: string | boolean | undefined;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
        readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
    }
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // .use(ZiggyVue)
            .use(Quasar, {
                plugins: {
                    Cookies,
                    Notify,
                    SessionStorage,
                }, // import Quasar plugins and add here
                iconSet: quasarIconSet,
                lang: quasarLang,
                config: {}, // quasar config see: https://quasar.dev/start/vite-plugin/
            })
            .mount(el);
    },
    // progress: false,
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
// initializeTheme();

