import TitleSubHome from "./TitleAndSubHome";

import { customRender } from "../../utils/testUtils";

test("Renders TitleSubhome component on homepage", () => {
  const { container } = customRender(<TitleSubHome title="If this is your first Bach" subtitle="We'd like to think of" />);
  expect(container).toMatchSnapshot();
});

