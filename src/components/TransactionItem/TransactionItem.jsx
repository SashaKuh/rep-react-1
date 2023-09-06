export const TransactionItem = ({item}) => {
    return(
        <>
        {item.map(({id, type, amount, currency})=> (
            
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            
        ))}
        
        </>
    )
}