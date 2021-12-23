import React from 'react';
import '../../styles/browse.css';


const CoinList = (props) => {

    const {coins, onClick} = props;

    return (
        <div className='coin-list'>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>24h</th>
                        <th className='coin-price-header'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coins && coins.map(coin => {
                        let price = coin.current_price;
                        if (price > 1 ) price = price.toLocaleString();
                        else if (price < 1 && price > 0.0001) price = price.toLocaleString(undefined, {minimumFractionDigits: 4});
                        else price = price.toLocaleString(undefined, {minimumFractionDigits: 8});

                        return (
                            <tr onClick={() => onClick(coin.id)} key={coin.market_cap_rank}>
                                <td>{coin.market_cap_rank}</td>
                                <td className='coin-name'><img className='coin-img' src={coin.image} alt={coin.name}></img>{coin.name}</td>
                                <td>{coin.symbol.toUpperCase()}</td>
                                <td style={coin.price_change_percentage_24h < 0 ? {color:'red'} : {color:'green'}}>
                                    {Math.abs(coin.price_change_percentage_24h).toFixed(2) + "%"}
                                </td>
                                <td className='coin-price' style={coin.price_change_percentage_24h < 0 ? {color:'red'} : {color:'green'}}>
                                    {'$' + price}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CoinList