import { render, screen } from "@testing-library/react";
import MainPage from "../components/MainPage";

let mockProps;
beforeEach(() => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
});

test("render MainPage without crashing", () => {
  expect(render(<MainPage {...mockProps} />)).toMatchSnapshot();
});

test("filters robots correctly", () => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "",
    isPending: false,
  };
  render(<MainPage {...mockProps} />);

  expect(screen.queryByText("John")).not.toBe(null);
});

test("filters robots correctly 2", () => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const filteredRobots = [];

  render(<MainPage {...mockProps} />);

  expect(screen.queryByText("John")).toBe(null);
});