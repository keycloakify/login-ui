import { useState } from "react";
import { assert } from "tsafe/assert";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { clsx } from "@keycloakify/login-ui/tools/clsx";
import { PasswordWrapper } from "../../components/PasswordWrapper";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { Template } from "../../components/Template";
import { useScript } from "./useScript";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-password.ftl");

    const { kcClsx } = useKcClsx();

    const { msg, msgStr } = useI18n();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const webAuthnButtonId = "authenticateWebAuthnButton";

    useScript({ webAuthnButtonId });

    return (
        <Template
            headerNode={msg("doLogIn")}
            displayMessage={!kcContext.messagesPerField.existsError("password")}
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    <form
                        id="kc-form-login"
                        onSubmit={() => {
                            setIsLoginButtonDisabled(true);
                            return true;
                        }}
                        action={kcContext.url.loginAction}
                        method="post"
                    >
                        <div className={clsx(kcClsx("kcFormGroupClass"), "no-bottom-margin")}>
                            <hr />
                            <label htmlFor="password" className={kcClsx("kcLabelClass")}>
                                {msg("password")}
                            </label>

                            <PasswordWrapper passwordInputId="password">
                                <input
                                    tabIndex={2}
                                    id="password"
                                    className={kcClsx("kcInputClass")}
                                    name="password"
                                    type="password"
                                    autoFocus
                                    autoComplete="on"
                                    aria-invalid={kcContext.messagesPerField.existsError(
                                        "username",
                                        "password"
                                    )}
                                />
                            </PasswordWrapper>

                            {kcContext.messagesPerField.existsError("password") && (
                                <span
                                    id="input-error-password"
                                    className={kcClsx("kcInputErrorMessageClass")}
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(kcContext.messagesPerField.get("password"))
                                    }}
                                />
                            )}
                        </div>
                        <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                            <div id="kc-form-options">
                                <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                    {kcContext.realm.resetPasswordAllowed && (
                                        <span>
                                            <a
                                                tabIndex={5}
                                                href={kcContext.url.loginResetCredentialsUrl}
                                            >
                                                {msg("doForgotPassword")}
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
                            <input
                                tabIndex={4}
                                className={kcClsx(
                                    "kcButtonClass",
                                    "kcButtonPrimaryClass",
                                    "kcButtonBlockClass",
                                    "kcButtonLargeClass"
                                )}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doLogIn")}
                                disabled={isLoginButtonDisabled}
                            />
                        </div>
                    </form>
                </div>
            </div>
            {kcContext.enableWebAuthnConditionalUI && (
                <>
                    <form id="webauth" action={kcContext.url.loginAction} method="post">
                        <input type="hidden" id="clientDataJSON" name="clientDataJSON" />
                        <input type="hidden" id="authenticatorData" name="authenticatorData" />
                        <input type="hidden" id="signature" name="signature" />
                        <input type="hidden" id="credentialId" name="credentialId" />
                        <input type="hidden" id="userHandle" name="userHandle" />
                        <input type="hidden" id="error" name="error" />
                    </form>
                    {kcContext.authenticators !== undefined &&
                        kcContext.authenticators.authenticators.length !== 0 && (
                            <>
                                <form id="authn_select" className={kcClsx("kcFormClass")}>
                                    {kcContext.authenticators.authenticators.map((authenticator, i) => (
                                        <input
                                            key={i}
                                            type="hidden"
                                            name="authn_use_chk"
                                            readOnly
                                            value={authenticator.credentialId}
                                        />
                                    ))}
                                </form>
                            </>
                        )}
                    <br /> {/* We use a br here because kcMarginTopClass is not defined in login v1 */}
                    <input
                        id={webAuthnButtonId}
                        type="button"
                        className={kcClsx(
                            "kcButtonClass",
                            "kcButtonDefaultClass",
                            "kcButtonBlockClass",
                            "kcButtonLargeClass"
                        )}
                        value={msgStr("passkey-doAuthenticate")}
                    />
                </>
            )}
        </Template>
    );
}
