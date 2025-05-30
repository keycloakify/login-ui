import { useEffect } from "react";
import { useInsertScriptTags } from "@keycloakify/keycloak-login-ui/tools/useInsertScriptTags";
import { waitForElementMountedOnDom } from "@keycloakify/keycloak-login-ui/tools/waitForElementMountedOnDom";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function useScript(params: { authButtonId: string }) {
    const { authButtonId } = params;

    const { kcContext } = useKcContext({ assertPage: "login-passkeys-conditional-authenticate.ftl" });
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "");

    const { msgStr, isFetchingTranslations } = useI18n();

    const { insertScriptTags } = useInsertScriptTags({
        componentOrHookName: "LoginRecoveryAuthnCodeConfig",
        scriptTags: [
            {
                type: "module",
                textContent: () => `
                    import { authenticateByWebAuthn } from "${kcContext.url.resourcesPath}/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${kcContext.url.resourcesPath}/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${authButtonId}");
                    const input = {
                        isUserIdentified : ${kcContext.isUserIdentified},
                        challenge : ${JSON.stringify(kcContext.challenge)},
                        userVerification : ${JSON.stringify(kcContext.userVerification)},
                        rpId : ${JSON.stringify(kcContext.rpId)},
                        createTimeout : ${kcContext.createTimeout}
                    };
                    authButton.addEventListener("click", () => {
                        authenticateByWebAuthn({
                            ...input,
                            errmsg : ${JSON.stringify(msgStr("webauthn-unsupported-browser-text"))}
                        });
                    });

                    initAuthenticate({
                        ...input,
                        errmsg : ${JSON.stringify(msgStr("passkey-unsupported-browser-text"))}
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
