import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
    state = {
        collapse: false
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto text-center">
                <Link className="navbar-brand" to="/">หน้าแรก</Link>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"
                        onClick={() => {
                            this.setState({ collapse: !this.state.collapse });
                        }}
                    ></span>
                </button>
                <div className={
                    this.state.collapse ?
                        'collapse navbar-collapse show text-center' :
                        'collapse navbar-collapse'
                }>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">สินค้าทั้งหมด</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">เพิ่มสินค้า</Link>
                        </li>
                    </ul>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            หมวดหมู่สินค้า
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link className="nav-link" to="/product/category/IT" >อิเล็กทรอนิกส์ IT</Link>
                            <Link className="nav-link" to="/product/category/BOOK" >หนังสือ</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        )
    }
}

export default Header;
