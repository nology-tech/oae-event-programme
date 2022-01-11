// import {
//   getMockEventById
// } from "../../assets/data/data";
import {
  customRender
} from "../../utils/testUtils";
import Home from "./Home";
// import * as axios from 'axios';
import {
  getMockEventById
} from "../../assets/data/data";
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    eventId: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
  }),
}));

// jest.mock("axios");
// axios.get.mockImplementation(() => Promise.resolve({
//   data: (getMockEventById("6bb8ffe8-6e5e-4abc-be7f-b05b749849cf"))
// }))

jest.spyOn(React, 'useState').mockImplementationOnce(() => React.useState())

test("Test", () => {
  const {
    container
  } = customRender( < Home / > );
  expect(container).toMatchSnapshot();
});