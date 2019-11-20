import React, {useEffect, useState} from 'react';

function Home() {
  return (
    <section>
      <div class="container-fluid">
        <h1 class="mt-5">Welcome</h1>
        <p>This site was created using Node, React, Express, and MySQL. Data obtained through Google APIs.</p>
        <p>Server is hosted on Heroku and MySQL hosted on RemoteMYSQL.</p>
        <p>Please select a link in the navigation to start browsing.</p>
      </div>
    </section>
  );
}

export default Home;
