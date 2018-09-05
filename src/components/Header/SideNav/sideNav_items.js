import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import style from './sideNav.css';

const SideNavItems = () => {

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'code',
            text: 'Services',
            link: '/'
        },
        {
            type: style.option,
            icon: 'wrench',
            text: 'Projects',
            link: '/'
        },
        {
            type: style.option,
            icon: 'star-o',
            text: 'About',
            link: '/'
        },
        {
            type: style.option,
            icon: 'address-card',
            text: 'Contact',
            link: '/'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) =>{
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>

            )
        })
    }
    return(
        <div>
            {showItems()}
        </div>
    )

}

export default SideNavItems;