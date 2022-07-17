// require for JSX -> React.createElement() to work
import React from "react";

function Home() {
  return (
    <main>
      <section class="container">
        <header class="my-5">
          <h1>Workshops App</h1>
          <hr />
        </header>
        <p>
          Welcome to Workshops App. You will find details of workshops happening
          nearby.
        </p>
      </section>
    </main>
  );
}

export default Home;
