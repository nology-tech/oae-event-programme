import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import TitleArticle from "./TitleArticle";

test("Renders TitleArticle component", () => {
  const { container } = customRender(
    <TitleArticle headerTitle="Our Instruments" articleText="Article text" />
  );
  expect(container).toMatchSnapshot();
});

test("Renders header title", () => {
  customRender(<TitleArticle headerTitle="Our Instruments" />);
  const header = screen.queryByText("Our Instruments");
  expect(header).toBeInTheDocument();
});

test("Renders article text", () => {
  customRender(<TitleArticle articleText="Article text" />);
  const text = screen.queryByText("Article text");
  expect(text).toBeInTheDocument();
});
