import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">LogIn</a>
    )

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Server Side Rendering</Link>
                <ul className="right">
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admins">admins</Link>
                    </li>
                    <li>
                        {authButton}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);

