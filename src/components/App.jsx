import {Layout, ProfileAndStatisticsWrapper} from './Layout/Layout.styled'
import { Profile } from "./Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

import  user  from '../data/user.json'
import  data  from '../data/data.json'
import  friends  from '../data/friends.json'
import  transactions  from '../data/transactions.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <Layout>
      <ProfileAndStatisticsWrapper>
        <Profile user={user}/>
        <Statistics title='Upload stats' stats={data}/>
        <FriendList info={friends}/>
        <TransactionHistory item={transactions}/>
      </ProfileAndStatisticsWrapper>
    </Layout>
    
  );
};
