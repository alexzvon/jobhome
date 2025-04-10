import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import { quasar } from "@quasar/vite-plugin"

import path from 'path';
import { resolve } from 'node:path';

// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1000, // Увеличиваем порог предупреждения
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            sassVariables: fileURLToPath(new URL('./resources/css/quasar-variables.sass', import.meta.url))
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
    // css: {
    //     postcss: {
    //         plugins: [tailwindcss, autoprefixer],
    //     },
    // },
});




// import { fileURLToPath } from 'node:url'
// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import vue from '@vitejs/plugin-vue';
// import { quasar } from "@quasar/vite-plugin";

// export default defineConfig({
// //   build: {
// //     chunkSizeWarningLimit: 1000, // Увеличиваем порог предупреждения
// //   },

//   plugins: [
//     // laravel({
//     //   input: 'resources/js/app.js',
//     //   ssr: 'resources/js/ssr.js',
//     //   refresh: true,
//     // }),
//     // vue({
//     //   template: {
//     //     transformAssetUrls: {
//     //       base: null,
//     //       includeAbsolute: false,
//     //     },
//     //   },
//     // }),
//     quasar({
//       sassVariables: fileURLToPath(new URL('./resources/css/quasar-variables.sass', import.meta.url))
//     }),
//   ],
// });

