import { assert } from "tsafe/assert";
import { useScript } from "./useScript";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";
import { LogoutOtherSessions } from "../../components/LogoutOtherSessions";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "webauthn-register.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    const webAuthnButtonId = "registerWebAuthn";

    useScript({ webAuthnButtonId });

    return (
        <Template
            headerNode={
                <>
                    <span className={kcClsx("kcWebAuthnKeyIcon")} />
                    {msg("webauthn-registration-title")}
                </>
            }
        >
            <form
                id="register"
                className={kcClsx("kcFormClass")}
                action={kcContext.url.loginAction}
                method="post"
            >
                <div className={kcClsx("kcFormGroupClass")}>
                    <input type="hidden" id="clientDataJSON" name="clientDataJSON" />
                    <input type="hidden" id="attestationObject" name="attestationObject" />
                    <input type="hidden" id="publicKeyCredentialId" name="publicKeyCredentialId" />
                    <input type="hidden" id="authenticatorLabel" name="authenticatorLabel" />
                    <input type="hidden" id="transports" name="transports" />
                    <input type="hidden" id="error" name="error" />
                    <LogoutOtherSessions />
                </div>
            </form>
            <ActionGroup>
                <Button
                    type="submit"
                    classKeys={["kcButtonPrimaryClass"]}
                    id={webAuthnButtonId}
                    label="doRegisterSecurityKey"
                />
            </ActionGroup>
            {!kcContext.isSetRetry && kcContext.isAppInitiatedAction && (
                <form
                    action={kcContext.url.loginAction}
                    className={kcClsx("kcFormClass")}
                    id="kc-webauthn-settings-form"
                    method="post"
                >
                    <Button
                        type="submit"
                        classKeys={["kcButtonDefaultClass", "kcButtonBlockClass"
                        ]}
                        id="cancelWebAuthnAIA"
                        name="cancel-aia"
                        value="true"
                        label="doCancel"
                    />
                </form>
            )}

        </Template>
    );
}
