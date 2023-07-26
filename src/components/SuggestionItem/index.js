// Write your code here

const SuggestionItem = props => {
  const {details, updatedSearchInput} = props
  const {suggestion} = details
  const onArrowClick = () => {
    // updateSearchInput()
  }
  return (
    <div>
      <p>{suggestion}</p>
      <img
        alt="arrow"
        onClick={onArrowClick}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </div>
  )
}

export default SuggestionItem
