import { render } from "@testing-library/react";
import EventHeaderDetails from "./EventHeaderDetails"

test("Renders EventHeaderDetails component", () => {
  const { container } = render(<EventHeaderDetails/>);
  expect(container).toMatchSnapshot();
});


test("time should display as 11.30am", () => {
  const { container } = render(<EventHeaderDetails time="11.30am" />);
  expect(container).toMatchSnapshot();
});

test("date should be Sun 21 Nov 2021", () => {
  const { container } = render(<EventHeaderDetails date= "Sun 21 Nov 2021" />);
  expect(container).toMatchSnapshot();
});

test("venue should be King's place", () => {
  const { container } = render(<EventHeaderDetails venue="King's place"/>);
  expect(container).toMatchSnapshot();
});
test("location should be London", () => {
  const { container } = render(<EventHeaderDetails location="London"/>);
  expect(container).toMatchSnapshot();
});

