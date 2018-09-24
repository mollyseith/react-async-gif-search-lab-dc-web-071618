import React from 'react'

class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.search)
  }

  render() {
    return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.search} onChange={e => this.setState({ search: e.target.value})} />
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default GifSearch
