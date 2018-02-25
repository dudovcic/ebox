import React, { Component } from 'react';
import classes from './styles.css';
class Header extends Component {

    render() {

        return (
              <div id={classes.cssmenu}>
                <ul>
                   <li className={classes.active}><a href=''><span>Home</span></a></li>
                   <li><a href=''><span>Products</span></a></li>
                   <li><a href=''><span>Company</span></a></li>
                   <li className={classes.last}><a href=''><span>Contact</span></a></li>
                </ul>
              </div>

        )

    }

}

export default Header;
