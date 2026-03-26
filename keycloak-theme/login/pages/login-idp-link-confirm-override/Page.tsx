import { assert } from "tsafe/assert";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";
import { useKcContext } from "../../KcContext";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-idp-link-confirm-override.ftl");

    const { msg } = useI18n();

    return (
        <Template headerNode={msg("confirmOverrideIdpTitle")}>
            <form id="kc-register-form" action={kcContext.url.loginAction} method="post">
                {msg("pageExpiredMsg1")}{" "}
                <a id="loginRestartLink" href={kcContext.url.loginRestartFlowUrl}>
                    {msg("doClickHere")}
                </a>
                <br />
                <ActionGroup>
                    <Button
                        type="submit"
                        classKeys={["kcButtonDefaultClass"]}
                        name="submitAction"
                        id="confirmOverride"
                        value="confirmOverride"
                    >
                        {msg("confirmOverrideIdpContinue", kcContext.idpDisplayName)}
                    </Button>
                </ActionGroup>
            </form>
        </Template>
    );
}
