// vite.config.js
export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: "./public/main.js",
    },
  },
};
