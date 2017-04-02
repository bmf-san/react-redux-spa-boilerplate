import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sample">Sample</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
