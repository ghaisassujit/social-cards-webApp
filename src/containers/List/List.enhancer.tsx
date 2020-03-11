import { StoryStore } from "../../store/types";
import { ListProps } from "./List.types";
import { connect } from "react-redux";

const mapStateToProps = (state: StoryStore): ListProps => {
    console.log('State is: ', state);
    return {
        stories: state.list.data
    };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);