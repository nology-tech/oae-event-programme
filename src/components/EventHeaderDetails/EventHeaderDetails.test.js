import EventHeaderDetails from "./EventHeaderDetails";
import { customRender } from "../../utils/testUtils";

test(" EventHeaderDetails component", () => {
  const { container } = customRender(<EventHeaderDetails />);
  expect(container).toMatchSnapshot();
});

test("time should display as 11.30am", () => {
  const { container } = customRender(<EventHeaderDetails time="11.30am" />);
  expect(container).toMatchSnapshot();
});

test("date should be Sun 21 Nov 2021", () => {
  const { container } = customRender(<EventHeaderDetails date="Sun 21 Nov 2021" />);
  expect(container).toMatchSnapshot();
});

test("venue should be King's place", () => {
  const { container } = customRender(<EventHeaderDetails venue="King's place" />);
  expect(container).toMatchSnapshot();
});

test("location should be London", () => {
  const { container } = customRender(<EventHeaderDetails location="London" />);
  expect(container).toMatchSnapshot();
});

test("Vertical divider span element should only render when there is both a time and date", () => {
  const { container } = customRender(<EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London South Bank" location="London" />);
  expect(container).toMatchSnapshot();
});

test("Comma divider span element should not render if there is no location", () => {
  const { container } = customRender(<EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London South Bank" />);
  expect(container).toMatchSnapshot();
});

test("Comma divider span element should render if there is a venue and location", () => {
  const { container } = customRender(<EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London South Bank" location="London" />);
  expect(container).toMatchSnapshot();
});
