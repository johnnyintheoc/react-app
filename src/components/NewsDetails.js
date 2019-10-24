import React, {useState, useEffect} from 'react';
import '../App.css';

function NewsDetails({match}) {
  useEffect( () => {
    fetchItems();
  },[]);

  const [item, setItem] = useState([]);

  const myStyle = {
    fontSize: '22px'
  }
  
  const fetchItems = async () => {
    const data = await fetch(`http://www.splashbase.co/api/v1/images/${match.params.id}`);
    const item = await data.json();
    setItem(item);
    //console.log(item);
  };

  return (
    <section class="content">
      <h1 class="title" style={myStyle}>http://www.splashbase.co/api/v1/images/{item.id}</h1>
      <p><img src={item.url} alt="" /></p>
    </section>
  );
}

export default NewsDetails;
