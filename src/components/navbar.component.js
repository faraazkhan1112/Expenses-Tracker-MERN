import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './applogo3.png';
import './test.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-company-blue navbar-expand-lg">
        <Link to="/" className="navbar-brand"><img src = {logo} alt = 'Logo'></img>  Expenses Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Expenses</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Expense Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}