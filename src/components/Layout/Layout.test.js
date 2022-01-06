import Layout from "./Layout";
import { customRender } from "../../utils/testUtils";

test("Renders Layout component with default page", () => {
  const { container } = customRender(
    <Layout eventId="123">
      <p>sample children</p>
    </Layout>
  );
  expect(container).toMatchSnapshot();
});

test("default font type for Layout is modern", () => {
  const { container } = customRender(<Layout />);
  expect(container.firstChild.classList.contains("modern")).toBe(true);
});

test("font type will change to classic", () => {
  const { container } = customRender(<Layout fontType={2} />);
  expect(container.firstChild.classList.contains("classic")).toBe(true);
});
