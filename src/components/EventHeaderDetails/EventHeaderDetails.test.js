import EventHeaderDetails from "./EventHeaderDetails";
import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

test(" EventHeaderDetails component", () => {
  const { container } = customRender(<EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London South Bank" location="London" />);
  expect(container).toMatchSnapshot();
});

test("I should expect to see the following text on the screen '11.30am', 'Sun 21 Nov 2021'and 'London South Bank'", () => {
  customRender(<EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London South Bank" />);

  const time = screen.getByText(/11.30am/);
  const date = screen.getByText(/Sun 21 Nov 2021/);
  const venue = screen.getByText("London South Bank");

  expect(time).toBeInTheDocument;
  expect(date).toBeInTheDocument;
  expect(venue).toBeInTheDocument;
});

test("I should expect to see the following text on the screen '11.30am', 'Sun 21 Nov 2021'and 'London South Bank'", () => {
  customRender(<EventHeaderDetails location="London" />);

  const location = screen.getByText("London");

  expect(location).toBeInTheDocument;
});
