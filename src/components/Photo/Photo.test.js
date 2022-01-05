import Photo from "./Photo";
import { customRender } from "../../utils/testUtils";
import testImage from "../../assets/images/image.png";
import { screen } from "@testing-library/react";

test("Renders Photo component", () => {
  const { container } = customRender(
    <Photo imageSrc={testImage} alt="hello world" description="Hello world" />
  );
  expect(container).toMatchSnapshot();
});

test("Renders imageSrc prop with test image", () => {
  customRender(
    <Photo imageSrc={testImage} alt="hello world" description="Hello world" />
  );
  const caption = screen.getByText("Hello world");
  expect(caption).toBeInTheDocument();
});
