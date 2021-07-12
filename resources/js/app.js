import { InertiaApp } from '@inertiajs/inertia-svelte'

const el = document.getElementById('app');

const pages = import.meta.globEager('./Pages/**/*.svelte');
const app = document.getElementById("app");
new InertiaApp({
        target: app,
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (name) => {
                const page = pages[`./Pages/${name}.svelte`];

                if (!page) {
                    throw new Error(`Page ${name} not found.`);
                }

                return page
            },
        },
    });
