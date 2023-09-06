import { HeadTr, TableBody, TransactionHistoryTable, TransactionTableHead }  from './TransactionHistory.styled';
import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({item}) => {
    return( 
        <TransactionHistoryTable>
            <TransactionTableHead>
                <HeadTr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </HeadTr>
            </TransactionTableHead>
            <TableBody>
                <TransactionItem item={item}/>
            </TableBody>

        </TransactionHistoryTable>
  
    )
}

