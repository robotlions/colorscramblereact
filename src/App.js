import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  let blockRow = (
    <div class="row">
      <div class="col-4 col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
      <div class="col-4 col-md-1">
        <div class="colorBox"></div>
      </div>
    </div>
  );

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

//   document.addEventListener('scroll', () => {
//     const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

//     if (window.scrollY >= scrollableHeight) {
//         alert('User has scrolled to the bottom of the page!')
//     }
// })

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
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
      {blockRow}
    </div>
  );
}

export default App;
