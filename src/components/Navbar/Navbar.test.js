
import { screen } from "@testing-library/react";
import Navbar from "./Navbar";

import { customRender } from "../../utils/testUtils";
// import userEvent from "@testing-library/user-event";
// import { container } from "react-router-dom";

test("The links are contain in the page", () => {
  customRender(<Navbar/>);
  // links is an array of three link components
  const links = screen.getAllByRole('link');    

  // check each of these links has the correct href value. e.g.'/','/event-schedule','/our-story'

  // check RTL docs for how to get the href value of the link (which is an <a> tag)
  expect(links[0]).toHaveAttribute("href", '/event-schedule');
  expect(links[1]).toHaveAttribute("href", '/');
  expect(links[2]).toHaveAttribute("href", '/our-story')
  // toHaveAttribute

  
})

