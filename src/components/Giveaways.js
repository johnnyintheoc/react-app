import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Giveaways() {
  useEffect( () => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:3000/giveaways.json');
    const items = await data.json();
    setItems(items);
  };

  return (
    <section class="content">
      <h1 class="title">Recent Giveaways on YouTube</h1>
      <ul class="yt-links">
      {
        items.map(item => (
          <li id={item.channel_id}>
            <Link to={`//www.youtube.com/channel/${item.channel_id}`} target="_blank"><img src={item.vid_thumbnail} alt={item.channel} border="0" /></Link>
            <br /><Link to={`//www.youtube.com/channel/${item.channel_id}`} target="_blank">{item.channel}</Link>
            <br />{item.title}
          </li>
        ))
      }
      </ul>
    </section>
  );
}

export default Giveaways;
