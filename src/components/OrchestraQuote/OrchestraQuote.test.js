import OrchestraQuote from "./OrchestraQuote";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

test("Renders OrchestraQuote component on homepage", () => {
  const { container } = customRender(
    <OrchestraQuote
      quote="COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."
      author="Vladmir Jurowski"
    />
  );

  expect(container).toMatchSnapshot();
});

test('Should expect to see the following quote "COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."', () => {
  customRender(
    <OrchestraQuote
      quote="COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."
      author="Vladmir Jurowski"
    />
  );

  const quote = screen.getByText(
    /COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE./
  );
  const author = screen.getByText(/Vladmir Jurowski/);

  expect(quote).toBeInTheDocument;
  expect(author).toBeInTheDocument;
});
