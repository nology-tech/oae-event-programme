import { customRender } from "../../utils/testUtils";
import placeHolderImage from "../../assets/images/image33.png";
import HeaderImageVideoContainer from "./HeaderImageVideoContainer";

test("it should render the component", () => {
  const { container } = customRender(<HeaderImageVideoContainer content={placeHolderImage} isVideo={false} />);
  expect(container).toMatchSnapshot();
});

test("it should render the YoutubeEmbed component if isVideo is true", () => {
  const { container } = customRender(<HeaderImageVideoContainer content={placeHolderImage} isVideo={true} />);
  expect(container).toMatchSnapshot();
});

test("it should not render anything without props", () => {
  const { container } = customRender(<HeaderImageVideoContainer />);
  expect(container).toMatchSnapshot();
});
