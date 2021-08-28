import React from 'react'

//styles
import styles from './friendList.module.css'

interface Props {
    friends:Array<Friend>
}

interface Friend {
    avatar: string,
    name: string,
    isOnline: boolean,
    id: number
}


const FriendList: React.FC<Props> = ({friends}) => {

    return (
        <section className={styles.friend}>

            <ul className={styles.friend_list}>
                {friends.map(item => (
                    <li key={item.id} className={styles.item}>
                        {item.isOnline ?
                            <span className={styles.online}></span>
                            :
                            <span className={styles.offline}></span>
                        }
                        <img className={styles.avatar} src={item.avatar} alt={`${item.name} avatar`} width="48" />
                        <p className={styles.name}>{item.name}</p>
                    </li>
                ))}
                
            </ul>
        </section>
    );
}

export default FriendList;