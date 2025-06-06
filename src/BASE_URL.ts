/**
 * NOTE: This is a shim for `import.meta.env.BASE_URL`.
 * When you know that you are in a vite project you can just use `import.meta.env.BASE_URL`.
 * This is to use in two situations:
 * - You are building a component that must support Vite and Webpack setups.
 * - You are in a Webpack setup.
 * */
export { BASE_URL } from "./core/BASE_URL";
