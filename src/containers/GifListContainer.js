import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit = search => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json => this.getGifs(json.data))
  }

  getGifs = data => {
    let gifUrls = data.slice(0, 3).map(gif => gif.images.original.url)
    this.setState({gifs: gifUrls})
  }

  render() {
    return (
      <div>
          <GifList gifs={this.state.gifs}/>
          <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default GifListContainer
