import { StyledStats, StatsEl, Label } from './State.styled';

export const State = ({ state: { followers, views, likes } }) => {
    const stateItems = [
        { label: 'Followers', value: followers },
        { label: 'Views', value: views },
        { label: 'Likes', value: likes },
    ]
    return(
        <StyledStats>
            {stateItems.map(({label, value}) => (
                <StatsEl  key={label}>
                    <Label>{label}</Label>
                    <span>{value}</span>
                </StatsEl>
            ))}
        </StyledStats>
    )
}