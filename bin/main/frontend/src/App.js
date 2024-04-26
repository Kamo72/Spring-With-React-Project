import logo from './logo.svg';
import './App.css';

function App() {

  async function HttpTestCode()
  {
    console.log("GET Init");
    const getData = await (
      await fetch(
        `http://localhost:8080/api/get`
      )
    ).json();
    console.log(getData)
    
    const postData = { first : 1, second : 2, list : [1, 2, 3, 4]};

    console.log("POST Init");
    const response = await(
      await fetch("http://localhost:8080/api/post", {
        method: "POST", // 또는 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
    );
    console.log(response);
  }
  HttpTestCode();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
