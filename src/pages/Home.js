import Dashboard from "./Dashboard";
function Home () {
    return (
        <>
        <div className="content">
        <h1>This is the Home Page</h1>
        </div>
        < Dashboard />
        {/* If a user visits /stocks or clicks "Home" in the navigation bar, they should be directed to a dashboard page. */}
        </>
    )
}

export default Home;