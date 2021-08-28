import React from 'react';

//styles
import styles from './transactionHistory.module.css'

interface Props {
    items:Array<Item>
}

interface Item {
    id:string,
    type:string,
    amount:string,
    currency:string,
}

const TransactionHistory:React.FC<Props> = ({items}) => {
    
    return (
        <section className={styles.transaction}>
            <table className={styles.transaction_history}>
                <thead >
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{ item.type}</td>
                            <td>{ item.amount}</td>
                            <td>{ item.currency}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </section>
    );
}

export default TransactionHistory;
