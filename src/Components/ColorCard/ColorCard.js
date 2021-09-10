import { useState, useContext } from "react";
import { BannerContext } from "../../Context/BannerContext";
import { ReactComponent as CopyIcon } from "../../aseets/icons/copy.svg";
import * as clipboard from "clipboard-polyfill/text";

function ColorCard(props) {
    const [setBannerType] = useContext(BannerContext);
    const [hoverState, setHoverState] = useState(false);

    return (
        <div className="color__card" key={props.value}
            onClick={() => {
                clipboard.writeText(`rgb(${props.value})`).then(
                    () => { setBannerType('succ'); },
                    () => { setBannerType('err'); }
                );
                setTimeout(() => {
                    setBannerType('banner');
                }, 1500);
            }}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
        >
            {hoverState && (
                <div className="color__card-hover">
                    <CopyIcon />
                    <p>Click to  copy the color code to clipboard</p>
                </div>
            )}
            <div className="color__element"
                style={{ backgroundColor: `rgb(${props.value})` }}
            ></div>
            <div className="color__code">
                <p>rgb({props.value[0]},{props.value[1]},{props.value[2]})</p>
            </div>
        </div>
    )
}

export default ColorCard
