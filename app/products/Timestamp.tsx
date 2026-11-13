// app/products/Timestamp.tsx

"use client";

// export default function Timestamp() {
//     return (
//         <p>Current time: {new Date().toLocaleString()}</p>
//     )
// }

import { useEffect, useState } from "react";

export default function Timestamp() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <p>Current time: {currentTime.toLocaleString()}</p>
    );
}
