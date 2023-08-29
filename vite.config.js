export default {
  root: 'src',
  build: {
    outDir: '../public',
    rollupOptions: {
      external: ['scrolla'], // scrolla.js는 외부 라이브러리로 처리
    },
  },
};
