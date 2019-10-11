import React, {useState, useEffect} from 'react';
import '../App.css';

function NewsDetails({ match }) {
  useEffect( () => {
    fetchItem();
    //console.log(match);
  },[]);

  const [item, setItem] = useState({
    //img: {}
  });

  const myStyle = {
    fontSize: '22px'
  }
  
  const fetchItem = async () => {
    const fetchItem = await fetch(`http://www.splashbase.co/api/v1/images/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <section class="content">
      <h1 style={myStyle}>http://www.splashbase.co/api/v1/images/{item.id}</h1>
      <p><img src={item.url} /></p>
    </section>
  );
}

export default NewsDetails;
