import { customRender } from "../../utils/testUtils";
import SettingsItemToggle from "./SettingsItemToggle";
import { screen } from "@testing-library/react";

test("renders settingsItemToggle component", () => {
  const { container } = customRender(<SettingsItemToggle />);
  expect(container).toMatchSnapshot();
});
