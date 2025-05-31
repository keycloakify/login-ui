import { useEffect } from "react";
import { useInsertScriptTags } from "@keycloakify/keycloak-login-ui/tools/useInsertScriptTags";
import { useInsertLinkTags } from "@keycloakify/keycloak-login-ui/tools/useInsertLinkTags";
import { useKcClsx } from "@keycloakify/keycloak-login-ui/useKcClsx";
import { BASE_URL } from "@keycloakify/keycloak-login-ui/import.meta.env.BASE_URL";
import { useKcContext } from "../../KcContext";

export function useInitializeTemplate() {
    const { kcContext } = useKcContext();

    const { doUseDefaultCss } = useKcClsx();

    const { areAllStyleSheetsLoaded } = useInsertLinkTags({
        componentOrHookName: "Template",
        hrefs: !doUseDefaultCss
            ? []
            : [
                  `${BASE_URL}keycloak-login-ui/resources-common/node_modules/@patternfly/patternfly/patternfly.min.css`,
                  `${BASE_URL}keycloak-login-ui/resources-common/node_modules/patternfly/dist/css/patternfly.min.css`,
                  `${BASE_URL}keycloak-login-ui/resources-common/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
                  `${BASE_URL}keycloak-login-ui/resources-common/lib/pficon/pficon.css`,
                  `${BASE_URL}keycloak-login-ui/css/login.css`
              ]
    });

    const { insertScriptTags } = useInsertScriptTags({
        componentOrHookName: "Template",
        scriptTags: [
            // NOTE: The importmap is added in by the FTL script because it's too late to add it here.
            {
                type: "module",
                src: `${BASE_URL}keycloak-login-ui/js/menu-button-links.js`
            },
            ...(kcContext.scripts === undefined
                ? []
                : kcContext.scripts.map(src => ({
                      type: "text/javascript" as const,
                      src
                  }))),
            {
                type: "module",
                textContent: `
                    import { checkCookiesAndSetTimer } from "${BASE_URL}keycloak-login-ui/js/authChecker.js";

                    checkCookiesAndSetTimer("${kcContext.url.ssoLoginInOtherTabsUrl}");
                `
            }
        ]
    });

    useEffect(() => {
        if (areAllStyleSheetsLoaded) {
            insertScriptTags();
        }
    }, [areAllStyleSheetsLoaded]);

    return { isReadyToRender: areAllStyleSheetsLoaded };
}
