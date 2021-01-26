import React from 'react';


function Header () {
  return (
    <header>
    <h1>eve</h1>
    </header>
  )
}


function Main () {
  return (
    <section>
    <p>main here</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
    <p>Copyright {props.year}</p>
    </footer>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer year={new Date().getFullYear()}/>
      </div>
    );
  }
}

export default App;
