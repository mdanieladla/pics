import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  handleSubmitForm = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSubmitForm}>
          <div className='field'>
            <label>Search a photo!</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(ev) => this.setState({ term: ev.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
