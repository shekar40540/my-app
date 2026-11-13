// app/products/Modal.tsx

"use client";

import { useState } from "react";

interface ModalProps {
    children: React.ReactNode;
}

export default function Modal({ children}: ModalProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setOpen(true)}>View Details</button>
                {open && <div className="modal">{children}</div>}
            </div>
        </>
    )
}