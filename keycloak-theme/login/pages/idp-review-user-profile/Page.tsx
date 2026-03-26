import { assert } from "tsafe/assert";
import { useState } from "react";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { UserProfileFormFields } from "../../components/UserProfileFormFields";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "idp-review-user-profile.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    const [isFomSubmittable, setIsFomSubmittable] = useState(false);

    return (
        <Template
            displayMessage={kcContext.messagesPerField.exists("global")}
            displayRequiredFields
            headerNode={msg("loginIdpReviewProfileTitle")}
        >
            <form
                id="kc-idp-review-profile-form"
                className={kcClsx("kcFormClass")}
                action={kcContext.url.loginAction}
                method="post"
            >
                <UserProfileFormFields onIsFormSubmittableValueChange={setIsFomSubmittable} />
                <ActionGroup>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        type="submit"
                        disabled={!isFomSubmittable}
                        label="doSubmit"
                    />
                </ActionGroup>
            </form>
        </Template>
    );
}
