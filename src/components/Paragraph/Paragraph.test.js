import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Paragraph from "./Paragraph.jsx";

it("should render the article", () => {
  customRender(<Paragraph />);
  const paragraph = screen.getByRole("p");

  expect(paragraph).toMatchSnapshot();
});
