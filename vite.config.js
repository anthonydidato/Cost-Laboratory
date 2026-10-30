import {defineConfig} from 'vite';
export default defineConfig({base:'/Cost-Laboratory/',build:{rollupOptions:{output:{manualChunks:{charts:['recharts']}}}}});
