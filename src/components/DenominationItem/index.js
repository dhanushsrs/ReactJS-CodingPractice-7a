// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {id, value} = denominationDetails

  const withdrawAmount = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item">
      <button className="value-btn" type="button" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
