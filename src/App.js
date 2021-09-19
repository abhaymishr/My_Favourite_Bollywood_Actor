import "./styles.css";
import { useState } from "react";

var actorData = {
  Amitabh_Bachchan: [
    {
      film: "Badla",
      year: "2019",
      Rating: "5/5"
    },
    {
      film: "Kabhi Khushi Kabhi Gum",
      year: "2007",
      Rating: "4/5"
    },
    {
      film: "Sholay",
      year: "1970",
      Rating: "5/5"
    }
  ],
  SRK: [
    {
      film: "Darr",
      year: "1999",
      Rating: "5/5"
    },
    {
      film: "Fan",
      year: "2017",
      Rating: "4/5"
    },
    {
      film: "Om Shanti Om",
      year: "2007",
      Rating: "5/5"
    }
  ],
  Akshay_Kumar: [
    {
      film: "Bhool Bhulaiya",
      year: "2007",
      Rating: "5/5"
    },
    {
      film: "Phir Hera PHeri",
      year: "2004",
      Rating: "4/5"
    },
    {
      film: "Bhagam Bhag",
      year: "2007",
      Rating: "5/5"
    }
  ]
};

const actorArray = Object.keys(actorData);

export default function App() {
  const [actor, setActor] = useState("Amitabh_Bachchan");

  function detail(actorDetail) {
    setActor(actorDetail);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Actors</h1>

      <h2 className="actorHeading">
        Check Out My Favourite Actors And Their Movies
      </h2>
      <hr />
      <div className="genreContainer">
        {actorArray.map((actor) => (
          <span className="actorName" onClick={() => detail(actor)}>
            {" "}
            {actor}{" "}
          </span>
        ))}
      </div>
      <div>
        <h2>Details</h2>

        {actorData[actor].map((object) => {
          return (
            <div className="actorDetails">
              <div className="film">{object.film}</div>
              <div className="year">{object.year}</div>
              <div className="rating">{object.Rating}</div>
            </div>
          );
        })}
      </div>

      <footer class="main-footer">
        <div class="footer-content">
          <p class="footer-text">
            Made with ❤ by Abhay <br />
          </p>

          <div className="social">
            <a href="" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="" target="_blank">
              {" "}
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
