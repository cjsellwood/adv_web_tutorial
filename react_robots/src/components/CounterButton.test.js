import { fireEvent, render, screen } from "@testing-library/react";
import CounterButton from "./CounterButton";

test("expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(render(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

test("correctly increments the counter", () => {
  const mockColor = "red";
  render(<CounterButton color={mockColor} />);
  fireEvent.click(screen.getByTestId("counter"));
  fireEvent.click(screen.getByTestId("counter"));
  expect(screen.getByTestId("counter")).toHaveTextContent("Count 2");
  fireEvent.click(screen.getByTestId("counter"));
  expect(screen.getByTestId("counter")).toHaveTextContent("Count 3");
});
