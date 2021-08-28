import React from 'react';

//styles
import styles from './statistics.module.css'

interface Props {
    title?:string,
    stats:Array<Stats>,
}

interface Stats {
    id: string,
    label: string,
    percentage: number,
}

const Statistics:React.FC<Props> = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            
            <h2 className={styles.title}>
                {title === undefined ?
                    'Upload stats'
                    :
                    title
                }
            </h2>

            <ul className={styles.stat_list}>
                {stats.map(item => (
                    <li key={item.id} className={styles.item}>
                        <span className="label">{item.label}</span>
                        <span className={styles.percentage}>{ `${item.percentage}%`}</span>
                    </li>
                ))}
                
            </ul>
        </section>
    );
}

export default Statistics;
