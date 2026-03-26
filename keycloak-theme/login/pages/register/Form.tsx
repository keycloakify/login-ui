import { useState, useLayoutEffect } from "react";
import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { ActionGroup, Button, ButtonLink } from "../../components/Buttons";
import { UserProfileFormFields } from "../../components/UserProfileFormFields";
import { TermsAcceptance } from "./TermsAcceptance";

export function Form() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "register.ftl");
    const { kcClsx } = useKcClsx();

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);
    const [areTermsAccepted, setAreTermsAccepted] = useState(false);

    useLayoutEffect(() => {
        (window as any)["onSubmitRecaptcha"] = () => {
            // @ts-expect-error
            document.getElementById("kc-register-form").requestSubmit();
        };

        return () => {
            delete (window as any)["onSubmitRecaptcha"];
        };
    }, []);

    return (
        <form
            id="kc-register-form"
            className={kcClsx("kcFormClass")}
            action={kcContext.url.registrationAction}
            method="post"
        >
            <UserProfileFormFields onIsFormSubmittableValueChange={setIsFormSubmittable} />
            {kcContext.termsAcceptanceRequired && (
                <TermsAcceptance
                    areTermsAccepted={areTermsAccepted}
                    onAreTermsAcceptedValueChange={setAreTermsAccepted}
                />
            )}
            {kcContext.recaptchaRequired &&
                (kcContext.recaptchaVisible || kcContext.recaptchaAction === undefined) && (
                    <div className="form-group">
                        <div className={kcClsx("kcInputWrapperClass")}>
                            <div
                                className="g-recaptcha"
                                data-size="compact"
                                data-sitekey={kcContext.recaptchaSiteKey}
                                data-action={kcContext.recaptchaAction}
                            ></div>
                        </div>
                    </div>
                )}
            {kcContext.recaptchaRequired &&
                !kcContext.recaptchaVisible &&
                kcContext.recaptchaAction !== undefined ? (
                <ActionGroup>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        className="g-recaptcha"
                        data-sitekey={kcContext.recaptchaSiteKey}
                        data-callback="onSubmitRecaptcha"
                        data-action={kcContext.recaptchaAction}
                        type="submit"
                        label="doRegister"
                    />
                    <ButtonLink href={kcContext.url.loginUrl} label="backToLogin" classKeys={["kcButtonSecondaryClass"]} />
                </ActionGroup>
            ) : (
                <ActionGroup>
                    <Button
                        disabled={
                            !isFormSubmittable ||
                            (kcContext.termsAcceptanceRequired && !areTermsAccepted)
                        }
                        classKeys={["kcButtonPrimaryClass"]}
                        type="submit"
                        label="doRegister"
                    />
                    <ButtonLink href={kcContext.url.loginUrl} label="backToLogin" classKeys={["kcButtonSecondaryClass"]} />
                </ActionGroup>
            )}
        </form>
    );
}
