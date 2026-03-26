import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "delete-credential.ftl");

    const { msg } = useI18n();

    return (
        <Template
            displayMessage={false}
            headerNode={msg("deleteCredentialTitle", kcContext.credentialLabel)}
        >
            <div id="kc-delete-text">{msg("deleteCredentialMessage", kcContext.credentialLabel)}</div>
            <form className="form-actions" action={kcContext.url.loginAction} method="POST">
                <ActionGroup horizontal>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        name="accept"
                        id="kc-accept"
                        type="submit"
                        label="doConfirmDelete"
                    />
                    <Button
                        classKeys={["kcButtonSecondaryClass"]}
                        name="cancel-aia"
                        label="doCancel"
                        id="kc-decline"
                        type="submit"
                    />
                </ActionGroup>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
