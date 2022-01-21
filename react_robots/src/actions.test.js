import * as actions from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

let store;
let mockStore;
beforeEach(() => {
  mockStore = configureMockStore([thunk]);
  store = mockStore();
});

test("should create an action to search robots", () => {
  const text = "woo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

test("handles requesting robots API", () => {
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});

