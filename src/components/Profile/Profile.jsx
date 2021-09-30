import styles from './Profile.module.css'
import PropTypes from 'prop-types';


function Profile({
  name = "no name",
  tag,
  location,
  avatar,
  stats: { followers, views, likes}
}) {

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className="styles.stats">
        <li>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views: </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes: </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}


Profile.defaultProps = {
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
  stats: PropTypes.shape({
    followers: 0,
    views: 0,
    likes: 0,
  })

}

  Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

export default Profile;