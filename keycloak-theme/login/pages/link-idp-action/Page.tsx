import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "link-idp-action.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    return (
        <Template
            headerNode={msg("linkIdpActionTitle", kcContext.idpDisplayName)}
            displayMessage={false}
        >
            <div id="kc-link-text" className={kcClsx("kcContentWrapperClass")}>
                {msg("linkIdpActionMessage", kcContext.idpDisplayName)}
            </div>
            <form className={kcClsx("kcFormClass")} action={kcContext.url.loginAction} method="post">
                <ActionGroup>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        name="continue"
                        id="kc-continue"
                        type="submit"
                        label="doContinue"
                    />
                    <Button
                        classKeys={["kcButtonSecondaryClass"]}
                        name="cancel-aia"
                        id="kc-cancel"
                        type="submit"
                        label="doCancel"
                    />
                </ActionGroup>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
