
//components
import Profile from '../profile';
import Statistics from '../statistics';
import FriendList from '../friendList';
import TransactionHistory from '../transactionHistory';

//API
import user from '../../API/user.json'
import statisticalData from '../../API/statistical-data.json'
import friends from '../../API/friends.json';
import transactions from '../../API/transactions.json'

const App: React.FC = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
