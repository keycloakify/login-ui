import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "terms.ftl");

    const { msg } = useI18n();

    const { url } = kcContext;

    return (
        <Template displayMessage={false} headerNode={msg("termsTitle")}>
            <div id="kc-terms-text">{msg("termsText")}</div>
            <form className="form-actions" action={url.loginAction} method="POST">
                <ActionGroup horizontal>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        name="accept"
                        id="kc-accept"
                        type="submit"
                        label="doAccept"
                    />
                    <Button
                        classKeys={["kcButtonSecondaryClass"]}
                        name="cancel"
                        id="kc-decline"
                        type="submit"
                        label="doDecline"
                    />
                </ActionGroup>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
