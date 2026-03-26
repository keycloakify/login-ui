import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-idp-link-confirm.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    return (
        <Template headerNode={msg("confirmLinkIdpTitle")}>
            <form id="kc-register-form" action={kcContext.url.loginAction} method="post">
                <ActionGroup>
                    <Button
                        type="submit"
                        classKeys={["kcButtonDefaultClass"]}
                        name="submitAction"
                        id="updateProfile"
                        value="updateProfile"
                    >
                        {msg("confirmLinkIdpReviewProfile")}
                    </Button>
                    <Button
                        type="submit"
                        className={kcClsx("kcButtonSecondaryClass")}
                        name="submitAction"
                        id="linkAccount"
                        value="linkAccount"
                    >
                        {msg("confirmLinkIdpContinue", kcContext.idpAlias)}
                    </Button>
                </ActionGroup>
            </form>
        </Template>
    );
}
