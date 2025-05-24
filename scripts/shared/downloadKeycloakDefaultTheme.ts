import { join as pathJoin } from "path";
import { downloadAndExtractArchive } from "../../node_modules/keycloakify/src/bin/tools/downloadAndExtractArchive";
import { getProxyFetchOptions } from "../../node_modules/keycloakify/src/bin/tools/fetchProxyOptions";
import { getThisCodebaseRootDirPath } from "../tools/getThisCodebaseRootDirPath";
import { KEYCLOAK_VERSION, createOnArchiveFile } from "./downloadKeycloakDefaultTheme.login";

const cacheDirPath = pathJoin(getThisCodebaseRootDirPath(), "node_modules", ".cache", "scripts");

export async function downloadKeycloakDefaultTheme() {
    const { onArchiveFile } = createOnArchiveFile();

    const { extractedDirPath } = await downloadAndExtractArchive({
        url: `https://repo1.maven.org/maven2/org/keycloak/keycloak-themes/${KEYCLOAK_VERSION}/keycloak-themes-${KEYCLOAK_VERSION}.jar`,
        cacheDirPath,
        fetchOptions: getProxyFetchOptions({
            npmConfigGetCwd: getThisCodebaseRootDirPath()
        }),
        uniqueIdOfOnArchiveFile: "extractOnlyRequiredFiles",
        onArchiveFile
    });

    return { extractedDirPath };
}
