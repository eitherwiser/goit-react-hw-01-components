
import style from './FriendList.module.css'

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={style.item}>
      <span className="status" style={{ color: isOnline ? "green" : "red", fontSize: "36px"}}> &#9679; </span>
      <img className="avatar" src={avatar} alt={name} width="48" style={{margin: "0 30px 0 10px"}} />
      <p className="name">{name} </p>
    </li>
  )
}
