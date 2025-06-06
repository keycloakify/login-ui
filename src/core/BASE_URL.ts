import { assert } from "tsafe/assert";

/**
 * NOTE: This is a shim for `import.meta.env.BASE_URL`.
 * When you know that you are in a vite project you can just use `import.meta.env.BASE_URL`.
 * This is to use in two situations:
 * - You are building a component that must support Vite and Webpack setups.
 * - You are in a Webpack setup.
 * */
export const BASE_URL = (() => {
    vite: {
        let BASE_URL: string;

        try {
            // @ts-expect-error
            BASE_URL = import.meta.env.BASE_URL;

            assert(typeof BASE_URL === "string");
        } catch {
            break vite;
        }

        return BASE_URL;
    }

    // NOTE: From here, this is technical dept to support webpack

    use_kcContext: {
        const kcContext: { "x-keycloakify": { resourcesPath: string } } | undefined = (window as any)
            .kcContext;

        if (kcContext === undefined || process.env.NODE_ENV === "development") {
            break use_kcContext;
        }

        return `${kcContext["x-keycloakify"].resourcesPath}/dist/`;
    }

    webpack_dev_mode: {
        let BASE_URL: string;

        try {
            // @ts-expect-error:
            BASE_URL = process.env.PUBLIC_URL;

            assert(typeof BASE_URL === "string");
        } catch {
            break webpack_dev_mode;
        }

        return BASE_URL === "" ? "/" : `${BASE_URL}/`;
    }

    return "/";
})();
