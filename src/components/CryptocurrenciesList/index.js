import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderedHeader = () => (
    <div className="crypto-header-details">
      <p className="coin-type">Coin Type</p>
      <div className="value-details">
        <p className="currency-value">USD</p>
        <p className="currency-value">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="crypto-currency-container">
        {this.renderedHeader()}
        <ul className="crypto-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
