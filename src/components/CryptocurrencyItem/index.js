import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props

  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="crypto-currency-list">
      <div className="list-item-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-image"
        />
        <p className="currency-name">{currencyName}</p>
        <div className="currency-value-container">
          <p className="value">{usdValue}</p>
          <p className="value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
