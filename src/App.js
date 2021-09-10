import { useState, useEffect } from "react";
import axios from "axios";
import { BannerContext } from "./Context/BannerContext";
import Palette from "./Components/Palette/Palette";
import "./App.scss";

function App() {
  const [colors, setcolors] = useState();
  const [bannerType, setBannerType] = useState('banner');
  const [bannerNormal, setBannerNormal] = useState(false)
  const [bannerGenerated, setBannerGenerated] = useState(false)
  const [bannerSuccess, setBannerSuccess] = useState(false);
  const [bannerErr, setBannerErr] = useState(false);

  useEffect(() => {
    if (bannerType === 'succ') {
      setBannerSuccess(true);
      setBannerGenerated(false);
      setBannerNormal(false);
    }
    else if (bannerType === "generated") {
      setBannerGenerated(true);
    }
    else if (bannerType === 'err') {
      setBannerErr(true);
      setBannerGenerated(false);
      setBannerNormal(false);
    }
    else {
      setBannerNormal(true);
    }
  }, [bannerType])

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
        setBannerNormal(false);
        setBannerType('generated');
        setTimeout(() => {
          setBannerType('banner');
        }, 1500);
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
      <BannerContext.Provider value={[setBannerType]}>
        <div className="header">
          <h2>Color Palette Generator</h2>
        </div>
        {colors ? <Palette value={colors} /> : <Palette />}
        <div className="action">
          <button onClick={randomPalette}>Generate Palette</button>
          <p>Or just press the "Spacebar" to Generate palette.</p>
        </div>
        {bannerNormal ? (
          <div className="help">
            <p> Click to copy individual color</p>
            <p className="key">&nbsp; •&nbsp; </p>
            <p className="key">Press "C" to copy palettes</p>
          </div>
        ) : (
          <>
            {bannerSuccess &&
              <div className="help success">
                <p>Successfully copied color code to clipboard!!</p>
              </div>
            }
            {bannerErr &&
              <div className="help err">
                <p>Failed to copy color code!!</p>
              </div>
            }
            {bannerGenerated &&
              <div className="help gen">
                <p>New color palette generated!!</p>
              </div>
            }
          </>
        )}

      </BannerContext.Provider>
    </div>
  );
}

export default App;
