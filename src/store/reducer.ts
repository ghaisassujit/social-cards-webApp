import { StoryStore, initialState, Progress } from "./types";
import {
  ActionWithData,
  StoryActions,
  StoryAnyAction
} from "./actions";

const socialCardReducer = (
  state: StoryStore = initialState,
  action: StoryAnyAction
) => {
  switch (action.type) {
    case StoryActions.ListLoading: {
      return {
        ...state
      };
    }
    case StoryActions.ListLoaded: {
      return {
        ...state
      };
    }
    case StoryActions.ListLoadingError: {
      return {
        ...state
      };
    }
    case StoryActions.AddNew: {
      return {
        ...state
      };
    }
    case StoryActions.Saving: {
      let newState = [...state.list.data];
      action.payload.createdDate = new Date().toDateString();
      newState.push(action.payload);
      return {
        ...state, 
        list: {data: newState}
      };
    }
    case StoryActions.Saved: {
      return {
        ...state
      };
    }
    case StoryActions.SavingError: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default socialCardReducer;