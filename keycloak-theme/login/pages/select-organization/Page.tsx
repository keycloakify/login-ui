import { useState, useRef, type MouseEvent } from "react";
import { assert } from "tsafe/assert";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "select-organization.ftl");

    const { kcClsx } = useKcClsx();

    const { msg } = useI18n();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const organizationInputRef = useRef<HTMLInputElement>(null);

    const onOrganizationClick =
        (organizationAlias: string) => (event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();

            if (!organizationInputRef.current || !formRef.current) {
                return;
            }

            organizationInputRef.current.value = organizationAlias;
            setIsSubmitting(true);

            if (typeof formRef.current.requestSubmit === "function") {
                formRef.current.requestSubmit();
                return;
            }

            formRef.current.submit();
        };

    const organizations = kcContext.user.organizations ?? [];
    const shouldDisplayGrid = organizations.length > 3;

    return (
        <Template
            headerNode={
                kcContext.code.success
                    ? msg("codeSuccessTitle")
                    : msg("codeErrorTitle", kcContext.code.error)
            }
        >
            <form
                ref={formRef}
                action={kcContext.url.loginAction}
                className="form-vertical"
                method="post"
            >
                <div id="kc-user-organizations" className={kcClsx("kcFormGroupClass")}>
                    <h2>{msg("organization.select")}</h2>
                    <ul
                        className={kcClsx(
                            "kcFormSocialAccountListClass",
                            shouldDisplayGrid && "kcFormSocialAccountListGridClass"
                        )}
                    >
                        {kcContext.organizations.map(({ alias, name }) => (
                            <li key={alias}>
                                <button
                                    id={`organization-${alias}`}
                                    className={kcClsx(
                                        "kcFormSocialAccountListButtonClass",
                                        shouldDisplayGrid && "kcFormSocialAccountGridItem"
                                    )}
                                    type="button"
                                    onClick={onOrganizationClick(alias)}
                                    disabled={isSubmitting}
                                >
                                    <span className={kcClsx("kcFormSocialAccountNameClass")}>
                                        {name ?? alias}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <input ref={organizationInputRef} type="hidden" name="kc.org" />
            </form>
        </Template>
    );
}
