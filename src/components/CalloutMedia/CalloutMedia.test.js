import CalloutMedia from "./CalloutMedia";
import { customRender } from "../../utils/testUtils";

test("Renders Callout Media component wih default page", () => {
  const { container } = customRender(
    <CalloutMedia content="123">
      <p>sample children</p>
    </CalloutMedia>
  );
  expect(container).toMatchSnapshot();
});
