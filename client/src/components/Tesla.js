import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Tesla() {
  useEffect( () => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/tesla');
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      <div class="container-fluid">
        <h1 class="mt-5">Tesla</h1>
        <div class="row padding">
        {
          items.map(item => (
            <div class="col-md-3 mt-5">

              <div class="card">
                <Link to={`https://www.youtube.com/channel/${item.channelId}`} data-toggle="modal" data-target={`#vidModal${item.videoId}`}><img class="card-img-top" src={item.thumbnailURL} alt="" /></Link>
                <div class="card-body">
                    <h5 class="card-title">
                        {item.title}
                    </h5>
                    <p class="card-text">
                        {item.channelTitle}
                        <br />{item.title}
                    </p>
                    <p class="blockquote-footer">Published: {item.publishedAt}</p>
                    <Link to={`https://www.youtube.com/channel/${item.channelId}`} className="btn btn-info" data-toggle="modal" data-target={`#vidModal${item.videoId}`}>View Video</Link>
                </div>
              </div>

              <div class="modal fade" id={`vidModal${item.videoId}`} tabindex="-1" role="dialog" aria-labelledby={`vidModalLabel${item.videoId}`} aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={`vidModalLabel${item.videoId}`}>{item.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid text-center">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.videoId}`} title={item.title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
        </div>
      </div>
    </section>
  );
}

export default Tesla;
