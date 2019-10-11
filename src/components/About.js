import React from 'react';
import '../App.css';

function About() {
  return (
    <section class="content">
      <h1>About</h1>
      <p>This site was created using React with the following dependencies:</p>
      <p><code>BrowserRouter, Switch, Route, react-dom</code></p>
      <p>The News page pulls images from the <code>splashbase.co</code> API.</p>
    </section>
  );
}

export default About;
