import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// // https://vite.dev/config/
// export default defineConfig({
//   base: import.meta.env.MODE === "production"
//     ? "/HTE-drone-solutions/"
//     : "/",
//   plugins: [react()],
// })

export default defineConfig(({ command, mode }) => {
  return {
    base: command === "serve"
      ? "/"
      : "/HTE-drone-solutions/",
    plugins: [react()],
  };
});