import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Includes/Navbar';
import Sidebar from './Includes/Sidebar';

// function formatName(user){
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Sakib All',
//     lastName: 'Hasan'
// };


class Master extends Component {
  render() {

    return <div className=''>
                <div className="row">
                    <div className="col-lg-12">
                       <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9">
                        
                    </div>
                </div>
            </div>;
  }
}

export default Master;
