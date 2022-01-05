//import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import placeHolderImage from "../../assets/images/image33.png";
import HeaderImageVideoContainer from "./HeaderImageVideoContainer";

test("it should render the component", () => {
    const {container} = customRender (
        <HeaderImageVideoContainer
        imgSrc={placeHolderImage}
        />
    );
    expect(container).toMatchSnapshot();
});

test("it should not render anything without props", () => {
    const {container} = customRender (
        <HeaderImageVideoContainer        
        />
    );
    expect(container).toMatchSnapshot();
});