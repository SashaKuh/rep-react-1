import {FriendItem} from '../FriendItem/FriendItem'
import {List} from './FriendList.styled'

export const FriendList = ({info}) => {
    return(
        <List>
            {info.map(({avatar, name, isOnline, id}) => (
                <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
            ))}
        </List>
    )
}
