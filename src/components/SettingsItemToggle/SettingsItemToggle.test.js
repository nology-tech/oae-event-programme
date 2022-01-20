import { customRender } from "../../utils/testUtils";
import SettingsItemToggle from "./SettingsItemToggle";

test("renders settingsItemToggle component", () => {
  const { container } = customRender(<SettingsItemToggle />);
  expect(container).toMatchSnapshot();
});
