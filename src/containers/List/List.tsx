import React from "react";
import { ListProps } from "./List.types";
import {Story} from '../../store/types';
import { StoryItem } from "../../components/StoryItem/StoryItem";

export const List = ({stories}: ListProps) => {
    return (<div>
        <h1>Stories</h1>
        {
            stories.map((story: Story, index) => {
                return (<StoryItem {...story} key={index}></StoryItem>);
            })
        }
    </div>)
};

