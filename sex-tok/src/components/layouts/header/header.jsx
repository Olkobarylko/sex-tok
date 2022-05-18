import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <ul>
                <li>logo</li>
                <li>first item</li>
                <li>second item</li>
                <li>third item</li>
            </ul>
        </div>
    )
}

export default Header;