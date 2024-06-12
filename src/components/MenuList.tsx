import menuIcon from '../assets/images/icons/menu/DEFAULT.jpg';

function MenuList() {


    
    return (
        
        <ul>
            <li>
                <img src={menuIcon} alt="Menu Icon" className="img-fluid" />
                <p>Singleplayer</p>
            </li>
            <li>
                <img src={menuIcon} alt="Menu Icon" className="img-fluid" />
                <p>Multiplayer</p>
            </li>
            <li>
                <img src={menuIcon} alt="Menu Icon" className="img-fluid" />
                <p>Credits</p>
            </li>
        </ul>
    )
}

export default MenuList