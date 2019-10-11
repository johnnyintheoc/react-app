import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function News() {
  useEffect( () => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const imgStyle = {
    width: '200px'
  }

  const fetchItems = async () => {
    const data = await fetch('http://www.splashbase.co/api/v1/images/latest');
    const items = await data.json();
    setItems(items.images);
  };

  return (
    <section class="content">
      <h1>News</h1>
      <p>Random images from <code>http://www.splashbase.co</code></p>
      <p>Click on an image to view full size.</p>
      <ul class="news-links">
      {
        items.map(item => (
            <li key={item.id}>
              <Link to={`/news/${item.id}`}><img src={item.url} alt={item.url} style={imgStyle} /></Link>
            </li>
        ))
      }
      </ul>
    </section>
  );
}

export default News;
