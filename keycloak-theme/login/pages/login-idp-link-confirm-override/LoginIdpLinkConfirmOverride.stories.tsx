import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-idp-link-confirm-override.ftl" });
const { kcContext } = useKcContext();
assert(kcContext.pageId === "");

const meta = {
    title: "login/login-idp-link-confirm-override.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
