import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = { searchField: "" };
  test("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  test("should handle the CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: "",
  };

  test("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  test("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ isPending: true, robots: [], error: "" });
  });

  test("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com",
        },
      ],
      error: "",
    });
  });

  test("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "NOO!",
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: "NOO!",
    });
  });
});
