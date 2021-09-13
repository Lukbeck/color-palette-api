import ColorCard from "../ColorCard/ColorCard";
import "./Palette.scss";

function Palette(props) {
  return (
    <div className="palette">
      {props.value ? (
        <>
          {props.value.map((color) => (
            <ColorCard value={color} key={color} />
          ))}
        </>
      ) : (
        <>
          <div className="color__card">
            <div className="color__element"></div>
            <div className="color__code"></div>
          </div>
          <div className="color__card">
            <div className="color__element"></div>
            <div className="color__code"></div>
          </div>
          <div className="color__card">
            <div className="color__element"></div>
            <div className="color__code"></div>
          </div>
          <div className="color__card">
            <div className="color__element"></div>
            <div className="color__code"></div>
          </div>
          <div className="color__card">
            <div className="color__element"></div>
            <div className="color__code"></div>
          </div>
        </>
      )}
    </div >
  );
}

export default Palette;
