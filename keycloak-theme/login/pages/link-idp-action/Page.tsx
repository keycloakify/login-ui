import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "link-idp-action.ftl");

    const { kcClsx } = useKcClsx();

    const { msg, msgStr } = useI18n();

    return (
        <Template
            headerNode={msg("linkIdpActionTitle", kcContext.idpDisplayName)}
            displayMessage={false}
        >
            <div id="kc-link-text" className={kcClsx("kcContentWrapperClass")}>
                {msg("linkIdpActionMessage", kcContext.idpDisplayName)}
            </div>
            <form className={kcClsx("kcFormClass")} action={kcContext.url.loginAction} method="post">
                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <input
                            className={kcClsx(
                                "kcButtonClass",
                                "kcButtonPrimaryClass",
                                "kcButtonLargeClass"
                            )}
                            name="continue"
                            id="kc-continue"
                            type="submit"
                            value={msgStr("doContinue")}
                        />
                        <input
                            className={kcClsx(
                                "kcButtonClass",
                                "kcButtonDefaultClass",
                                "kcButtonLargeClass"
                            )}
                            name="cancel-aia"
                            id="kc-cancel"
                            type="submit"
                            value={msgStr("doCancel")}
                        />
                    </div>
                </div>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
