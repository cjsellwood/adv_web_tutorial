import { render } from "@testing-library/react";
import CardList from "./CardList";

test("expect to render Card component", () => {
  const mockRobots = [
    { id: 1, name: "John Snow", username: "JohnJohn", email: "john@gmail.com" },
  ];
  expect(render(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
