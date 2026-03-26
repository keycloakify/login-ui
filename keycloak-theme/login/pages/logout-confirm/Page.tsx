import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button, ButtonLink } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "logout-confirm.ftl");

    const { url, client, logoutConfirm } = kcContext;

    const { msg } = useI18n();

    return (
        <Template headerNode={msg("logoutConfirmTitle")}>
            <div id="kc-logout-confirm" className="content-area">
                <p className="instruction">{msg("logoutConfirmHeader")}</p>
                <form className="form-actions" action={url.logoutConfirmAction} method="POST">
                    <input type="hidden" name="session_code" value={logoutConfirm.code} />
                    <ActionGroup>
                        <Button
                            tabIndex={4}
                            classKeys={["kcButtonPrimaryClass"]}
                            name="confirmLogout"
                            id="kc-logout"
                            type="submit"
                            label="doLogout"
                        />
                        {!logoutConfirm.skipLink && client.baseUrl && (
                            <ButtonLink
                                href={client.baseUrl}
                                label="backToApplication"
                                classKeys={["kcButtonSecondaryClass"]}
                            />
                        )}
                    </ActionGroup>
                </form>
            </div>
        </Template>
    );
}
