import TitleSubHome from "./TitleAndSubHome";
import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

test("Renders TitleSubhome component on homepage", () => {
  const { container } = customRender(<TitleSubHome title="If this is your first Bach" subtitle="We'd like to think of" />);
  expect(container).toMatchSnapshot();


});


test("Should check if the title is If this is your first Bach", () => {

  customRender (
    <TitleSubHome 
    title="If this is your first Bach" subtitle="We'd like to think of" />
  )
  

  const title = screen.getByText(/If this is your first Bach/);
  const subtitle = screen.getByText(/We'd like to think of/)


  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();

  

  
})
