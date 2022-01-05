
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { Link } from 'react-router';
import { customRender } from "../../utils/testUtils";

test("The links are contain in the page", () => {
  customRender(<Navbar/>);
  const link = screen.getAllByRole('link');    
  expect(link).not.toBeNull();
})

test("Home Link goes to home page", () => {
  const {container} = customRender(<Navbar/>);
  const link = screen.getByRole('home-link');    
  expect(container.innerHTML).toMatch('Home page');
})


