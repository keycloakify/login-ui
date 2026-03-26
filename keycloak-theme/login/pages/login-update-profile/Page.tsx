import { assert } from "tsafe/assert";
import { useState } from "react";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";
import { UserProfileFormFields } from "../../components/UserProfileFormFields";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-update-profile.ftl");

    const { kcClsx } = useKcClsx();

    const { messagesPerField, url, isAppInitiatedAction } = kcContext;

    const { msg } = useI18n();

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);

    return (
        <Template
            displayRequiredFields
            headerNode={msg("loginProfileTitle")}
            displayMessage={messagesPerField.exists("global")}
        >
            <form
                id="kc-update-profile-form"
                className={kcClsx("kcFormClass")}
                action={url.loginAction}
                method="post"
            >
                <UserProfileFormFields onIsFormSubmittableValueChange={setIsFormSubmittable} />
                <ActionGroup>
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
                            formNoValidate

                        />
                    )}
                </ActionGroup>
            </form>
        </Template>
    );
}
