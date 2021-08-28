import React from 'react';

//styles
import styles from './profile.module.css'

interface Props {
  name:string,
  tag:string,
  location:string,
  avatar:string,
  stats:Stats,
}

interface Stats {
    followers: number,
    views: number,
    likes: number,
}

const Profile: React.FC<Props> = ({ name, tag, location, avatar, stats }) => {
    const { followers, views, likes} = stats;
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                src={ avatar }
                alt="Аватар пользователя"
                className={styles.avatar}
                />
                <p className={styles.name}>{ name }</p>
                <p className={styles.tag}>@{ tag }</p>
                <p className={styles.location}>{ location }</p>
            </div>

            <ul className={styles.stats}>
                <li>
                <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{ followers }</span>
                </li>
                <li>
                <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{ views }</span>
                </li>
                <li>
                <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{ likes }</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
