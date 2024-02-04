export default {
  root: "src",
  server: {
    cors: "*",
    hmr: {},
  },
  build: {
    minify: true,
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        compact: true,
      },
    },
  },
  envDir: "../",
};
