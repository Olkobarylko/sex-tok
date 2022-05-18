import { NavLink } from "react-router-dom";
import style from './sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={style.nav}>
                <NavLink className={navData => navData.isActive ? `${style.active} ${style.link}` : style.link} to='/profile'>Profile</NavLink>
                <NavLink className={navData => navData.isActive ? `${style.active} ${style.link}` : style.link} to='/feed'>Feed</NavLink>
        </nav>
    )
}

export default Sidebar;