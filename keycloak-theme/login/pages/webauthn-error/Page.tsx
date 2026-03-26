import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "webauthn-error.ftl");

    const { url, isAppInitiatedAction } = kcContext;

    const { msg } = useI18n();

    const { kcClsx } = useKcClsx();

    return (
        <Template displayMessage headerNode={msg("webauthn-error-title")}>
            <form
                id="kc-error-credential-form"
                className={kcClsx("kcFormClass")}
                action={url.loginAction}
                method="post"
            >
                <input type="hidden" id="executionValue" name="authenticationExecution" />
                <input type="hidden" id="isSetRetry" name="isSetRetry" />
            </form>
            <ActionGroup>
                <Button
                    tabIndex={4}
                    onClick={() => {
                        // @ts-expect-error: Trusted Keycloak's code
                        document.getElementById("isSetRetry").value = "retry";
                        // @ts-expect-error: Trusted Keycloak's code
                        document.getElementById("executionValue").value = "${execution}";
                        // @ts-expect-error: Trusted Keycloak's code
                        document.getElementById("kc-error-credential-form").requestSubmit();
                    }}
                    classKeys={["kcButtonPrimaryClass"]}
                    name="try-again"
                    id="kc-try-again"
                    label="doTryAgain"
                />
                {isAppInitiatedAction && (
                    <form
                        action={url.loginAction}
                        className={kcClsx("kcFormClass")}
                        id="kc-webauthn-settings-form"
                        method="post"
                    >
                        <Button
                            type="submit"
                            classKeys={["kcButtonSecondaryClass", "kcButtonBlockClass"]}
                            id="cancelWebAuthnAIA"
                            name="cancel-aia"
                            value="true"
                            label="doCancel"
                        />
                    </form>
                )}
            </ActionGroup>
        </Template>
    );
}
