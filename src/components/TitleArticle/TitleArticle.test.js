import { customRender } from "../../utils/testUtils";
import TitleArticle from "./TitleArticle";

test("Renders TitleArticle component", () => {
  const { container } = customRender(<TitleArticle />);
  expect(container).toMatchSnapshot();
});

test("Header title is 'Our Instruments'", () => {
  const { container } = customRender(<TitleArticle headerTitle="Our Instruments" />);
  expect(container).toMatchSnapshot();
});

test("Article text should say 'Article text'", () => {
  const { container } = customRender(<TitleArticle articleText="Article text" />);
  expect(container).toMatchSnapshot();
});
