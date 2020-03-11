import { Story } from "../../store/types";
import React from "react";
import { StoryWrapper, StoryCaption } from "./StoryItem.styled";

export const StoryItem = ({ author, title, content, createdDate }: Story) => {
    return (
        <StoryWrapper>
            <StoryCaption>{title}</StoryCaption>
            <hr />
            <p>{content}</p>
            <div>
                {author} | {createdDate}
            </div>
        </StoryWrapper>
    );
}