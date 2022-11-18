import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import SearchHeader from './components/SearchHeader';



function App() {

  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('minions');
  const [lastSearch, setLastSearch] = useState('');

  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages();
  }
  

  const searchOptions = {
    key: "hDTU1pRYgHPMb3gvpVJYSJ4JfZzmyOlJ",
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  useEffect(() => {
    // Pass the searchString to getImages
    getImages(searchString);
  }, []);

  function getImages(searchString) {
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
        // Set the lastSearch to the searchString value
        setLastSearch(searchString);
        // Set the searchString in state to an empty string
        setSearchString('');
      })
      .catch(console.error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Don't forget to pass the searchString to getImages
    getImages(searchString);
  }


  return (
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}/>
      {/* <SearchHeader lastSearch={lastSearch} /> */}
      <SearchResults images={images} />
    </div>
  );
}

export default App;