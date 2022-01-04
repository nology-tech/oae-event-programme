import YoutubeEmbed from "./YoutubeEmbed";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render the YouTube embed component", () => {
  const { container } = customRender(<YoutubeEmbed embedId="q6EoRBvdVPQ" />);
  expect(container).toMatchSnapshot();
});

it("shouldn't render the YouTube embed component if no embedId has been input", () => {
  const { container } = customRender(<YoutubeEmbed />);
  expect(container).toMatchSnapshot();
});
