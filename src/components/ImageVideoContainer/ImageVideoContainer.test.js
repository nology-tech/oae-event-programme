import { customRender } from "../../utils/testUtils";
import placeHolderImage from "../../assets/images/image33.png";
import ImageVideoContainer from "./ImageVideoContainer";

test("it should render the component", () => {
  const { container } = customRender(
    <ImageVideoContainer content={placeHolderImage} isVideo={false} />
  );
  expect(container).toMatchSnapshot();
});

test("it should render the YoutubeEmbed component if isVideo is true", () => {
  const { container } = customRender(
    <ImageVideoContainer content={placeHolderImage} isVideo={true} />
  );
  expect(container).toMatchSnapshot();
});

test("it should not render anything without props", () => {
  const { container } = customRender(<ImageVideoContainer />);
  expect(container).toMatchSnapshot();
});
