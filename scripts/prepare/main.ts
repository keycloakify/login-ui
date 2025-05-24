import { generateI18nMessages } from "./generateI18nMessages";
import { generateResources } from "./generateResources";

(async () => {
    await generateI18nMessages();
    await generateResources();
})();
