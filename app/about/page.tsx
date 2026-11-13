// rafce - react Arrow Function Export Component
// import BackButton from "../back-button";

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our team and mission"
}

export const instant = false;

export default function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>

            {/* <BackButton /> */}
        </div>
    );
}