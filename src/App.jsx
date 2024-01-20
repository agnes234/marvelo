import "./App.css";
import { characters } from "./MarvelData";

function App() {
  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">MARVELO</h1>
        <input placeholder="Search an Entrepreneur" className="topInput" />
      </div>
      <div className="cardBody">
        {characters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="avatarImage" src={data.img1} alt={data.alias} />
              <h2>{data.alias}</h2>
              <p className="description">
                {data?.ventures[0]}
                <br />
                {data?.ventures[1]}
                <br />
                {data?.ventures[2]}
              </p>
              <div className="avatarInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{data.industry}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Home: {data.country}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
