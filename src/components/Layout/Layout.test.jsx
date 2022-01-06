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
