import { playwrightLauncher } from "@web/test-runner-playwright";
import { esbuildPlugin } from "@web/dev-server-esbuild";

const browsers = {
  chromium: playwrightLauncher({ product: "chromium" }),
  firefox: playwrightLauncher({ product: "firefox" }),
};

const noBrowser = (b) => {
  throw new Error(`No browser configured named '${b}'; using defaults`);
};
let commandLineBrowsers;
try {
  commandLineBrowsers = process.env.BROWSERS?.split(",").map(
    (b) => browsers[b] ?? noBrowser(b)
  );
} catch (e) {
  console.warn(e);
}

export default {
  testsStartTimeout: 30000,
  rootDir: ".",
  files: ["./src/__test__/**/*.test.ts"],
  nodeResolve: true,
  preserveSymlinks: true,
  browsers: commandLineBrowsers ?? Object.values(browsers),
  testFramework: {
    config: {
      ui: "tdd",
    },
  },
  plugins: [
    esbuildPlugin({ loaders: { ".ts": "ts", ".data": "json" } }),
  ],
};