const Navigation = () => {
    return (
        <nav className="navbar">
            <h1>WhatToDo</h1>
            <ul className="nav-links">
                <li><a href="/">Dashboard</a></li>
                <li><a href="/tasks">Tasks</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;