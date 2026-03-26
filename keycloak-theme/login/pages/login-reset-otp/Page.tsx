import { assert } from "tsafe/assert";
import { Fragment } from "react";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-reset-otp.ftl");

    const { kcClsx } = useKcClsx();

    const { url, messagesPerField, configuredOtpCredentials } = kcContext;

    const { msg } = useI18n();

    return (
        <Template displayMessage={!messagesPerField.existsError("totp")} headerNode={msg("doLogIn")}>
            <form
                id="kc-otp-reset-form"
                className={kcClsx("kcFormClass")}
                action={url.loginAction}
                method="post"
            >
                <div className={kcClsx("kcInputWrapperClass")}>
                    <div className={kcClsx("kcInfoAreaWrapperClass")}>
                        <p id="kc-otp-reset-form-description">{msg("otp-reset-description")}</p>
                        {configuredOtpCredentials.userOtpCredentials.map((otpCredential, index) => (
                            <Fragment key={otpCredential.id}>
                                <input
                                    id={`kc-otp-credential-${index}`}
                                    className={kcClsx("kcLoginOTPListInputClass")}
                                    type="radio"
                                    name="selectedCredentialId"
                                    value={otpCredential.id}
                                    defaultChecked={
                                        otpCredential.id ===
                                        configuredOtpCredentials.selectedCredentialId
                                    }
                                />
                                <label
                                    htmlFor={`kc-otp-credential-${index}`}
                                    className={kcClsx("kcLoginOTPListClass")}
                                    tabIndex={index}
                                >
                                    <span className={kcClsx("kcLoginOTPListItemHeaderClass")}>
                                        <span className={kcClsx("kcLoginOTPListItemIconBodyClass")}>
                                            <i
                                                className={kcClsx("kcLoginOTPListItemIconClass")}
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                        <span className={kcClsx("kcLoginOTPListItemTitleClass")}>
                                            {otpCredential.userLabel}
                                        </span>
                                    </span>
                                </label>
                            </Fragment>
                        ))}
                        <ActionGroup>
                            <Button
                                id="kc-otp-reset-form-submit"
                                classKeys={["kcButtonPrimaryClass"]}
                                type="submit"
                                label="doSubmit"
                            />
                        </ActionGroup>
                    </div>
                </div>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
