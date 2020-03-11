import { Story, Progress } from "../../store/types";

export interface AddNewStateProps {
    story: Story;
}

export interface AddNewDispatchProps{
    addStory: (story: Story) => void,
    addNewStory: () => void
}

export interface AddNewProps extends AddNewStateProps, AddNewDispatchProps{
}