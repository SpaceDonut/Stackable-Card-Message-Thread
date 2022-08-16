import { shallowMount } from "@vue/test-utils";
import RootPage from "@/components/RootPage.vue";

describe("RootPage.vue", () => {
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(RootPage);
    console.log(wrapper.classes);
    expect(wrapper.classes()).toContain("root-container");
  });
});
