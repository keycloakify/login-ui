import { generateI18nMessages } from "./generateI18nMessages";
import { generateResources } from "./generateResources";
import { vendorFrontendDependencies } from "./vendorFrontendDependencies";
import { extraSteps } from "./main.overridable";

(async () => {
    await generateI18nMessages();
    await generateResources();
    vendorFrontendDependencies();
    await extraSteps();
})();
