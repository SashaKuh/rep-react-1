import {CustomFriendStatus, FriendItems, FriendStatus, FriendName} from './FriendItem.styled'

export const FriendItem = ({avatar, name, isOnline, key}) => {
    return(
        <FriendItems key={key}>
            <FriendStatus as={CustomFriendStatus} isOnline={isOnline} />
            <img src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendItems>
    )
}