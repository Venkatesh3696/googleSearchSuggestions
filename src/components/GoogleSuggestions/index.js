// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSuggestions = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          alt="google logo"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="bottom-container">
          <div className="input-container">
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="input"
              className="input-element"
              onChange={this.updateSuggestions}
            />
          </div>
          <ul>
            {filteredSuggestions.map(each => (
              <SuggestionItem
                details={each}
                updatedSearchInput={filteredSuggestions}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
