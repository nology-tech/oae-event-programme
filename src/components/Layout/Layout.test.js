import Layout from "./Layout";
import { customRender } from "../../utils/testUtils";

test("Renders the Layout component with default page", () => {
  const { container } = customRender(
    <Layout>
      <p>Sample children</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

test("Ensure the Layout div has a className", () => {
  const { container } = customRender(
    <Layout>
      {" "}
      <p>Sample children</p>{" "}
    </Layout>
  );
  expect(container.firstChild).toHaveClass("modern");
});
