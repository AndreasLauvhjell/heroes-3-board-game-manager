
function NavBar() {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar