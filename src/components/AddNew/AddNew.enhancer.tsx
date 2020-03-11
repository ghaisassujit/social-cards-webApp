import { StoryStore, Story, Progress } from "../../store/types";
import {AddNewProps, AddNewStateProps} from "./AddNew.types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addNew, saving } from "../../store/actions";

const mapStateToProps = (state: StoryStore): AddNewStateProps => {
    console.log('State is: ', state);
    return {
        story: state.newStory.data,
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addStory : (story: Story) => dispatch(saving(story)),
    addNewStory: () => dispatch(addNew())
});

export default connect(mapStateToProps, mapDispatchToProps);