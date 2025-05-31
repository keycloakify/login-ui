import { useEffect } from "react";
import { assert } from "tsafe/assert";
import { useInsertScriptTags } from "@keycloakify/keycloak-login-ui/tools/useInsertScriptTags";
import { waitForElementMountedOnDom } from "@keycloakify/keycloak-login-ui/tools/waitForElementMountedOnDom";
import { BASE_URL } from "@keycloakify/keycloak-login-ui/import.meta.env.BASE_URL";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";

export function useScript(params: { authButtonId: string }) {
    const { authButtonId } = params;

    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "webauthn-authenticate.ftl");

    const { msgStr, isFetchingTranslations } = useI18n();

    const { insertScriptTags } = useInsertScriptTags({
        componentOrHookName: "WebauthnAuthenticate",
        scriptTags: [
            {
                type: "module",
                textContent: () => `

                    import { authenticateByWebAuthn } from "${BASE_URL}keycloak-login-ui/js/webauthnAuthenticate.js";
                    const authButton = document.getElementById('${authButtonId}');
                    authButton.addEventListener("click", function() {
                        const input = {
                            isUserIdentified : ${kcContext.isUserIdentified},
                            challenge : '${kcContext.challenge}',
                            userVerification : '${kcContext.userVerification}',
                            rpId : '${kcContext.rpId}',
                            createTimeout : ${kcContext.createTimeout},
                            errmsg : ${JSON.stringify(msgStr("webauthn-unsupported-browser-text"))}
                        };
                        authenticateByWebAuthn(input);
                    });
                `
            }
        ]
    });

    useEffect(() => {
        if (isFetchingTranslations) {
            return;
        }

        (async () => {
            await waitForElementMountedOnDom({
                elementId: authButtonId
            });

            insertScriptTags();
        })();
    }, [isFetchingTranslations]);
}
