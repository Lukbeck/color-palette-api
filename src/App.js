import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [colors, setcolors] = useState();

  const randomPalette = () => {
    axios({
      method: "POST",
      url: " https://cors-everywhere.herokuapp.com/http://colormind.io/api/",
      data: {
        model: "ui",
      },
    })
      .then((res) => {
        setcolors(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: " https://cors-everywhere.herokuapp.com/http://colormind.io/api/",
      data: {
        model: "ui",
      },
    })
      .then((res) => {
        setcolors(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h2>Color Palette Generator</h2>
      </div>
      <div className="palette">
        {colors ? (
          <>
            {colors.map((color) => (
              <div className="color-card">
                <div
                  className="color-element"
                  style={{ backgroundColor: `rgb(${color})` }}
                ></div>
                <div className="color-code" onClickCapture>
                  <p>
                    rgb({color[0]},
                    {color[1]},
                    {color[2]})
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="color-card">
              <div className="color-element"></div>
              <div className="color-code"></div>
            </div>
            <div className="color-card">
              <div className="color-element"></div>
              <div className="color-code"></div>
            </div>
            <div className="color-card">
              <div className="color-element"></div>
              <div className="color-code"></div>
            </div>
            <div className="color-card">
              <div className="color-element"></div>
              <div className="color-code"></div>
            </div>
            <div className="color-card">
              <div className="color-element"></div>
              <div className="color-code"></div>
            </div>
          </>
        )}
      </div>
      <div className="action">
        <button onClick={randomPalette}>Generate Palette</button>
        <p>Or just press the "Spacebar" to Generate palette.</p>
      </div>
      <div className="help">
        <p> Click to copy individual color</p>
        <p className="key">&nbsp;•&nbsp;</p>
        <p className="key">Press "C" to copy palettes</p>
      </div>
    </div>
  );
}

export default App;
