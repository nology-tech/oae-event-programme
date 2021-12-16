import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import ParagraphComponent from "./ParagraphComponent.jsx";

it("should render the article", ()=> {
  customRender(<ParagraphComponent />);
  const article = screen.getByRole("article");

  expect(article).toMatchSnapshot();
})