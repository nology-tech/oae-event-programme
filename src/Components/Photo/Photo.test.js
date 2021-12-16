import Photo from "./Photo";
import { customRender } from "../../utils/testUtils";
import testImage from "../../assets/images/image.png";

test("Renders Photo component", () => {
  const { container } = customRender(<Photo />);
  expect(container).toMatchSnapshot();
});

test("Renders imageSrc prop with test image", () => {
  const { container } = customRender(<Photo imageSrc={testImage} />);
  expect(container).toMatchSnapshot();
});

test("Renders description prop with text 'Hello world'", () => {
  const { container } = customRender(<Photo description="Hello world" />);
  expect(container).toMatchSnapshot();
});
