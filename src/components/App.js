import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
//images
import camera from '../images/camera.svg';
//Styles
import '../styles/app.css';

class App extends React.Component {
  state = { images: [] };

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container'>
        <div className='title-div'>
          <img src={camera} className='camera-svg' alt='camera svg' />
          <h1 className='title'>Image browser</h1>
          <img src={camera} className='camera-svg' alt='camera-svg' />
        </div>

        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
