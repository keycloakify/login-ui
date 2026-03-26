import { assert } from "tsafe/assert";
import { useState } from "react";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { Template } from "../../components/Template";
import { UserProfileFormFields } from "../../components/UserProfileFormFields";
import { ActionGroup, Button } from "../../components/Buttons";
import { LogoutOtherSessions } from "../../components/LogoutOtherSessions";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "update-email.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);

    const { url, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields
            headerNode={msg("updateEmailTitle")}
        >
            <form
                id="kc-update-email-form"
                className={kcClsx("kcFormClass")}
                action={url.loginAction}
                method="post"
            >
                <UserProfileFormFields onIsFormSubmittableValueChange={setIsFormSubmittable} />

                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                        <div className={kcClsx("kcFormOptionsWrapperClass")} />
                    </div>

                    <LogoutOtherSessions />

                    <ActionGroup className={kcClsx("kcFormButtonsClass")}>
                        <Button
                            disabled={!isFormSubmittable}
                            classKeys={["kcButtonPrimaryClass"]}
                            type="submit"
                            label="doSubmit"
                        />
                        {isAppInitiatedAction && (
                            <Button
                                classKeys={["kcButtonSecondaryClass"]}
                                type="submit"
                                name="cancel-aia"
                                value="true"
                                label="doCancel"
                            />
                        )}
                    </ActionGroup>
                </div>
            </form>
        </Template>
    );
}
