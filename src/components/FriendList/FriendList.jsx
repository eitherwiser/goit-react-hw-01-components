import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import style from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}> {
      friends.map((friend) => ( 
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id} />
      ))}
    </ul>
  )}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};