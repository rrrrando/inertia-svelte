import { svelte } from '@sveltejs/vite-plugin-svelte';

export default ({ command }) => ({
    publicDir: 'disable',
    base: command === 'build' ? '/dist/' : '',
    plugins: [svelte()],
    build: {
        manifest: true,
        outDir: 'public/dist',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    optimizeDeps: {
            include: [
                "svelte",
                "@inertiajs/inertia",
                "@inertiajs/inertia-svelte",
            ],
        },
});
