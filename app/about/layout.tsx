export default function AboutLayou({children,}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>About Section nav only</nav>
            {children}
        </section>
    )
}