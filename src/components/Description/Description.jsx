import {StyledDescription, StyledAvatar, StyledName, StyledText } from './Description.styled';

export const Description = ({items: { username, tag, location, avatar}}) => {
    return (
        <StyledDescription >
            <StyledAvatar src={avatar} alt={username}></StyledAvatar>
            <StyledName>{username}</StyledName>  
            <StyledText>@{tag}</StyledText>  
            <StyledText>{location}</StyledText> 
    </StyledDescription>
    )
}