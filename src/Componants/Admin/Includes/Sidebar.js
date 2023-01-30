import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const sidebarName = ['Dashborad','User','Product','Order','Setting'];

class Sidebar extends Component {
    render() {
        return <div className="sidebar">
                <ul className="list-group">
                    {sidebarName.map(name => (
                        <li className="list-group-item"><a>{name}</a></li>
                    ))}
                    
                </ul>
        </div>; 
    }
}

export default Sidebar;