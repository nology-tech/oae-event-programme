import { customRender } from "../../utils/testUtils";
import PageHeader from "./PageHeader";

test("it should render the component", () => {
  const { container } = customRender(
    <PageHeader
      title="BACH, THE UNIVERSE & EVERYTHING"
      subtitle="Can You Hear The Shape of The Drum?"
      time="11.30am"
      date="Sun 21 Nov 2021"
      venue="South Bank"
      location="London"
      content=""
      isVideo={false}
    />
  );
  expect(container).toMatchSnapshot();
});

test("it should only render the EventTitle component if no props are passed to the other two coponents", () => {
  const { container } = customRender(
    <PageHeader
      title="BACH, THE UNIVERSE & EVERYTHING"
      subtitle="Can You Hear The Shape of The Drum?"
    />
  );
  expect(container).toMatchSnapshot();
});
