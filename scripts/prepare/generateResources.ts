import { join as pathJoin } from "path";
import { downloadKeycloakDefaultTheme } from "../shared/downloadKeycloakDefaultTheme";
import { transformCodebase } from "../../node_modules/keycloakify/src/bin/tools/transformCodebase";
import { existsAsync } from "../../node_modules/keycloakify/src/bin/tools/fs.existsAsync";
import { getThisCodebaseRootDirPath } from "../tools/getThisCodebaseRootDirPath";
import { WELL_KNOWN_DIRECTORY_BASE_NAME } from "../../node_modules/keycloakify/src/bin/shared/constants";
import * as fsPr from "fs/promises";

export async function generateResources() {
    const { extractedDirPath } = await downloadKeycloakDefaultTheme();

    const destDirPath = pathJoin(getThisCodebaseRootDirPath(), "keycloak-theme-resources", "login");

    await fsPr.rm(destDirPath, { recursive: true, force: true });

    base_resources: {
        const srcDirPath = pathJoin(extractedDirPath, "base", "login", "resources");

        if (!(await existsAsync(srcDirPath))) {
            break base_resources;
        }

        transformCodebase({
            srcDirPath,
            destDirPath
        });
    }

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "keycloak", "login", "resources"),
        destDirPath
    });

    transformCodebase({
        srcDirPath: pathJoin(extractedDirPath, "keycloak", "common", "resources"),
        destDirPath: pathJoin(destDirPath, WELL_KNOWN_DIRECTORY_BASE_NAME.RESOURCES_COMMON)
    });
}
