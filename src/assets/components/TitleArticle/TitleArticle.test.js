import { render } from "@testing-library/react";
import TitleArticle from "./TitleArticle";

test("Renders TitleArticle component", () => {
  const { container } = render(<TitleArticle />);
  expect(container).toMatchSnapshot();
});

test("Header title is 'Our Instruments'", () => {
  const { container } = render(<TitleArticle headerTitle="Our Instruments" />);
  expect(container).toMatchSnapshot();
});

test("Article text should say 'Article text'", () => {
  const { container } = render(<TitleArticle articleText="Article text" />);
  expect(container).toMatchSnapshot();
});
