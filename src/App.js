//User
import user from './data/user.json';
import Profile from './components/Profile/Profile.jsx';
// Fiends
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList.jsx';
//Statistic
import statisticalData from './data/statistic.json';
import Statistics from './components/Statistics/Statistics.jsx';
//Transaction
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory.jsx';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistic" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
