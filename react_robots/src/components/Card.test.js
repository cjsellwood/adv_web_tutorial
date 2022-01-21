import { render } from "@testing-library/react";
import Card from "./Card";

test("expect to render Card component", () => {
  expect(render(<Card />)).toMatchSnapshot();
});
