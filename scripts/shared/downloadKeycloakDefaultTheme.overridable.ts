import { relative as pathRelative } from "path";
import { downloadAndExtractArchive } from "keycloakify/bin/tools/downloadAndExtractArchive";
import { join as pathJoin } from "path";
import type { Param0 } from "tsafe";

export const KEYCLOAK_VERSION = "25.0.4";

export function createOnArchiveFile() {
    let kcNodeModulesKeepFilePaths: Set<string> | undefined = undefined;

    const onArchiveFile: Param0<typeof downloadAndExtractArchive>["onArchiveFile"] = async params => {
        const fileRelativePath = pathRelative("theme", params.fileRelativePath);

        if (fileRelativePath.startsWith("..")) {
            return;
        }

        const { writeFile } = params;

        if (!fileRelativePath.startsWith("base") && !fileRelativePath.startsWith("keycloak")) {
            return;
        }

        if (
            !fileRelativePath.startsWith(pathJoin("base", "login")) &&
            !fileRelativePath.startsWith(pathJoin("keycloak", "login")) &&
            !fileRelativePath.startsWith(pathJoin("keycloak", "common"))
        ) {
            return;
        }

        if (fileRelativePath.endsWith(".ftl")) {
            return;
        }

        skip_node_modules: {
            const nodeModulesRelativeDirPath = pathJoin(
                "keycloak",
                "common",
                "resources",
                "node_modules"
            );

            if (!fileRelativePath.startsWith(nodeModulesRelativeDirPath)) {
                break skip_node_modules;
            }

            if (kcNodeModulesKeepFilePaths === undefined) {
                kcNodeModulesKeepFilePaths = new Set([
                    pathJoin("@patternfly", "patternfly", "patternfly.min.css"),
                    pathJoin("patternfly", "dist", "css", "patternfly.min.css"),
                    pathJoin("patternfly", "dist", "css", "patternfly-additions.min.css"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Regular-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Light-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Bold-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Bold-webfont.woff"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Bold-webfont.ttf"),
                    pathJoin("patternfly", "dist", "fonts", "fontawesome-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "PatternFlyIcons-webfont.ttf"),
                    pathJoin("patternfly", "dist", "fonts", "PatternFlyIcons-webfont.woff"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-Semibold-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-SemiboldItalic-webfont.woff2"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-SemiboldItalic-webfont.woff"),
                    pathJoin("patternfly", "dist", "fonts", "OpenSans-SemiboldItalic-webfont.ttf"),
                    pathJoin("patternfly", "dist", "img", "bg-login.jpg"),
                    pathJoin("jquery", "dist", "jquery.min.js"),
                    pathJoin("rfc4648", "lib", "rfc4648.js")
                ]);
            }

            const fileRelativeToNodeModulesPath = fileRelativePath.substring(
                nodeModulesRelativeDirPath.length + 1
            );

            if (kcNodeModulesKeepFilePaths.has(fileRelativeToNodeModulesPath)) {
                break skip_node_modules;
            }

            return;
        }

        skip_vendor: {
            if (!fileRelativePath.startsWith(pathJoin("keycloak", "common", "resources", "vendor"))) {
                break skip_vendor;
            }

            return;
        }

        skip_rollup_config: {
            if (fileRelativePath !== pathJoin("keycloak", "common", "resources", "rollup.config.js")) {
                break skip_rollup_config;
            }

            return;
        }

        skip_package_json: {
            if (fileRelativePath !== pathJoin("keycloak", "common", "resources", "package.json")) {
                break skip_package_json;
            }
            return;
        }

        await writeFile({ fileRelativePath });
    };

    return { onArchiveFile };
}
