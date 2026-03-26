import { useI18n } from "../i18n";
import { clsx } from "@keycloakify/login-ui/tools/clsx";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import type { MessageKey_defaultSet } from "@keycloakify/login-ui/i18n";
import type { ClassKey } from "@keycloakify/login-ui/useKcClsx";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";


export interface ActionGroupProps extends ComponentProps<"div"> {
    horizontal?: boolean;
}

export function ActionGroup(props: ActionGroupProps) {
    const { horizontal = false, children, className, ...rest } = props;

    return (
        <div
            id="kc-form-buttons"
            className={clsx(
                "pf-l-flex pf-m-space-items-sm",
                horizontal
                    ? "pf-m-row pf-m-justify-content-space-between pf-m-align-items-center pf-m-nowrap"
                    : "pf-m-column pf-m-align-items-stretch",
                className,
            )}
            style={{ width: "100%", overflow: "hidden" }}
            {...rest}
        >
            {children}
        </div>
    );
}

export interface ButtonProps extends ComponentProps<"button"> {
    label?: MessageKey_defaultSet;
    classKeys?: ClassKey[];
}

export function Button(props: ButtonProps) {
    const {
        label,
        className,
        classKeys = ["kcButtonPrimaryClass"],
        children,
        ...rest
    } = props;

    const { kcClsx } = useKcClsx();
    const { msg } = useI18n();

    return (
        <button
            className={clsx(kcClsx("kcButtonClass", "kcButtonLargeClass", ...(classKeys ?? [])), className ?? "")}
            {...rest}
        >
            {label !== undefined ? msg(label) : children}
        </button>
    );
}

export interface ButtonLinkProps extends ComponentProps<"a"> {
    label: MessageKey_defaultSet;
    classKeys?: ClassKey[];
}

export function ButtonLink(props: ButtonLinkProps) {
    const { kcClsx } = useKcClsx();
    const { msg } = useI18n();

    const {
        label,
        classKeys = ["kcButtonSecondaryClass"],
        ...rest
    } = props;

    return (
        <a className={kcClsx("kcButtonClass", "kcButtonLargeClass", ...classKeys)} {...rest}>
            {msg(label)}
        </a>
    );
}

export function LoginButton(props: ButtonProps) {
    return (
        <ActionGroup>
            <Button
                id="kc-login"
                name="login"
                classKeys={["kcButtonPrimaryClass"]}
                type="submit"
                label="doLogIn"
                {...props}
            />
        </ActionGroup>
    );
}
