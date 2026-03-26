import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { ActionGroup, Button } from "../../components/Buttons";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "delete-account-confirm.ftl");

    const { msg } = useI18n();

    return (
        <Template headerNode={msg("deleteAccountConfirm")}>
            <form action={kcContext.url.loginAction} className="form-vertical" method="post">
                <div className="alert alert-warning" style={{ marginTop: "0", marginBottom: "30px" }}>
                    <span className="pficon pficon-warning-triangle-o"></span>
                    {msg("irreversibleAction")}
                </div>
                <p>{msg("deletingImplies")}</p>
                <ul
                    style={{
                        color: "#72767b",
                        listStyle: "disc",
                        listStylePosition: "inside"
                    }}
                >
                    <li>{msg("loggingOutImmediately")}</li>
                    <li>{msg("errasingData")}</li>
                </ul>
                <p className="delete-account-text">{msg("finalDeletionConfirmation")}</p>
                <ActionGroup horizontal>
                    <Button
                        classKeys={["kcButtonPrimaryClass"]}
                        type="submit"
                        label="doConfirmDelete"
                    />
                    {kcContext.triggered_from_aia && (
                        <Button
                            classKeys={["kcButtonSecondaryClass"]}
                            type="submit"
                            name="cancel-aia"
                            value="true"
                            label="doCancel"
                        />
                    )}
                </ActionGroup>
            </form>
        </Template>
    );
}
