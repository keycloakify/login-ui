import { assert } from "tsafe/assert";
import { useEffect, useState } from "react";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "frontchannel-logout.ftl");

    const { msg, msgStr } = useI18n();
    const [iframeLoadCount, setIframeLoadCount] = useState(0);

    useEffect(() => {
        if (!kcContext.logout.logoutRedirectUri) {
            return;
        }

        if (iframeLoadCount !== kcContext.logout.clients.length) {
            return;
        }

        window.location.replace(kcContext.logout.logoutRedirectUri);
    }, [iframeLoadCount]);

    return (
        <Template
            documentTitle={msgStr("frontchannel-logout.title")}
            headerNode={msg("frontchannel-logout.title")}
        >
            <p>{msg("frontchannel-logout.message")}</p>
            <ul>
                {kcContext.logout.clients.map(client => (
                    <li key={client.name}>
                        {client.name}
                        <iframe
                            src={client.frontChannelLogoutUrl}
                            style={{ display: "none" }}
                            onLoad={() => {
                                setIframeLoadCount(count => count + 1);
                            }}
                        />
                    </li>
                ))}
            </ul>
            {kcContext.logout.logoutRedirectUri && (
                <a id="continue" className="btn btn-primary" href={kcContext.logout.logoutRedirectUri}>
                    {msg("doContinue")}
                </a>
            )}
        </Template>
    );
}
