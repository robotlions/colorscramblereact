import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  function rando() {
    return Math.floor(Math.random() * 255) + 1;
  }

  function shuffleColors() {
    let classEntries = document.querySelectorAll(".colorBox");
    for (let i = 0; i < classEntries.length; i++) {
      let randomColor = `rgb(${rando()}, ${rando()}, ${rando()})`;
      classEntries[i].style.backgroundColor = randomColor;
      // classEntries[i].style.backgroundImage = `linear-gradient(white, ${randomColor})`
    }
  }

  const BlockRow = () => {
    return (
      <div class="row">
        <div class="col-4 col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
        <div class="col-4 col-md-1">
          <div
            class="colorBox"
            style={{
              backgroundColor: `rgb(${rando()}, ${rando()}, ${rando()})`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  const ScrollBottomContent = () => {
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200
        ) {
          if (!isLoading) {
            setIsLoading(true);
            setTimeout(() => {
              const newContent = <BlockRow />;
              setContent((prevContent) => [...prevContent, newContent]);
              setIsLoading(false);
            }, 100);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isLoading]);
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
    );
  };

  return (
    <div className="container">
      <div id="mainButtonWrapper">
        <button
          id="mainButton"
          className="btn btn-warning"
          onClick={() => shuffleColors()}
        >
          Scramble Transmission!
        </button>
      </div>
      <BlockRow />
      <BlockRow />
      <BlockRow />
      <BlockRow /> 
      <BlockRow />
      <BlockRow />
      <BlockRow />
      <BlockRow />
      <BlockRow />

     

      <ScrollBottomContent />
    </div>
  );
}

export default App;
