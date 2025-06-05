import { useEffect, useReducer } from "react";
import { useConst } from "./useConst";
import { id } from "tsafe/id";
import { useOnFistMount } from "./useOnFirstMount";

// NOTE: This context has to be shared in storybook between the login
// and potential multi page account theme.
const GLOBAL_CONTEXT_KEY = "__keycloakify.useInsertLinkTags.globalContext";

declare global {
    interface Window {
        [GLOBAL_CONTEXT_KEY]: {
            alreadyMountedComponentOrHookNames: Set<string>;
        };
    }
}

window[GLOBAL_CONTEXT_KEY] ??= {
    alreadyMountedComponentOrHookNames: new Set()
};

const globalContext = window[GLOBAL_CONTEXT_KEY];

const { alreadyMountedComponentOrHookNames } = globalContext;

/**
 * NOTE: The component that use this hook can only be mounded once!
 * And can't rerender with different hrefs.
 * If it's mounted again the page will be reloaded.
 * This simulates the behavior of a server rendered page that imports css stylesheet in the head.
 */
export function useInsertLinkTags(params: { componentOrHookName: string; hrefs: string[] }) {
    const { hrefs, componentOrHookName } = params;

    useOnFistMount(() => {
        const isAlreadyMounted = alreadyMountedComponentOrHookNames.has(componentOrHookName);

        if (isAlreadyMounted) {
            reload: {
                if (new URL(window.location.href).searchParams.get("viewMode") === "docs") {
                    // NOTE: Special case for Storybook, we want to avoid infinite reload loop.
                    break reload;
                }
                window.location.reload();
            }
            return;
        }

        alreadyMountedComponentOrHookNames.add(componentOrHookName);
    });

    const [areAllStyleSheetsLoaded, setAllStyleSheetsLoaded] = useReducer(() => true, false);

    const refPrAllStyleSheetLoaded = useConst(() => ({
        current: id<Promise<void> | undefined>(undefined)
    }));

    useEffect(() => {
        let isActive = true;

        (refPrAllStyleSheetLoaded.current ??= (async () => {
            let lastMountedHtmlElement: HTMLLinkElement | undefined = undefined;

            const prs: Promise<void>[] = [];

            for (const href of hrefs) {
                const htmlElement = document.createElement("link");

                prs.push(
                    new Promise<void>(resolve => htmlElement.addEventListener("load", () => resolve()))
                );

                htmlElement.rel = "stylesheet";

                htmlElement.href = href;

                if (lastMountedHtmlElement !== undefined) {
                    lastMountedHtmlElement.insertAdjacentElement("afterend", htmlElement);
                } else {
                    document.head.prepend(htmlElement);
                }

                lastMountedHtmlElement = htmlElement;
            }

            await Promise.all(prs);
        })()).then(() => {
            if (!isActive) {
                return;
            }

            setAllStyleSheetsLoaded();
        });

        return () => {
            isActive = false;
        };
    }, []);

    return { areAllStyleSheetsLoaded };
}
