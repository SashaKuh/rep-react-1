import { Description } from "components/Description"
import { State } from "components/State"
import {ProfileFrame} from './Profile.styled'

export const Profile = ({user}) => {
    return(
        <ProfileFrame>
            <Description items={user}/> 
            <State state={user.stats}/>
        </ProfileFrame>
        
    )
}