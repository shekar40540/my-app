// "use client"
// import { useState } from "react";

// export default function counter() {
//     const [buttonCounter, setButtonCounter] = useState(0);
//     return (
        
//             <button onClick={() => setButtonCounter((prev)=>prev + 1)}>
//                 This button has been clicked {buttonCounter} number of times
//             </button>
        
//     )
// }



"use client";

import { useState } from "react";

export default function Counter() {
    const [buttonCounter, setButtonCounter] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false)
    return (
        <div>
            <h2>Counter Application</h2>

            <button
                type="button"
                onClick={() => {
                        setButtonCounter((prev) => prev + 1)
                        setButtonClicked(true)
                    }
                }
            >
                Click Me This button has been clicked {buttonCounter} times
            </button>
            {/* Conditional render */}
            { buttonClicked && <p>Yayy the button has been clicked</p>}
            { buttonCounter > 10 && <p>You really like clicking this button huh!</p> }
        </div>
    );
}

