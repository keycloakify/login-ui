import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-oauth2-device-verify-user-code.ftl");

    const { msg } = useI18n();

    const { kcClsx } = useKcClsx();

    return (
        <Template headerNode={msg("oauth2DeviceVerificationTitle")}>
            <form
                id="kc-user-verify-device-user-code-form"
                className={kcClsx("kcFormClass")}
                action={kcContext.url.oauth2DeviceVerificationAction}
                method="post"
            >
                <div className={kcClsx("kcFormGroupClass")}>
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <label htmlFor="device-user-code" className={kcClsx("kcLabelClass")}>
                            {msg("verifyOAuth2DeviceUserCode")}
                        </label>
                    </div>

                    <div className={kcClsx("kcInputWrapperClass")}>
                        <input
                            id="device-user-code"
                            name="device_user_code"
                            autoComplete="off"
                            type="text"
                            className={kcClsx("kcInputClass")}
                            autoFocus
                        />
                    </div>
                </div>

                <ActionGroup>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        type="submit"
                        label="doSubmit"
                    />
                </ActionGroup>
            </form>
        </Template>
    );
}
