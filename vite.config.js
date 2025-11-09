import {defineConfig} from 'vite';

// https://vite.dev/config/

const host = 'localhost';
const root = './';
const base = './';

const server = {
    host: host,
    port: 5173,
    open: true,
};

const build = {
    manifest: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 4096,
}

const preview = {
    host: host,
    port: 4173,
    open: true,
};

const config = {
    root: root,
    base: base,
    server: server,
    build: build,
    preview: preview,
};

const viteConfig = defineConfig(config);
export default viteConfig;