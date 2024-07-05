import React from 'react';
import IngameBackground from '../assets/images/backgroundimages/ingame/ingame.png'
import IngameMenu from '../assets/images/icons/ingame/IngameMenu.png'
import Btn from '../components/buttons/Button';
import { useNavigate } from 'react-router-dom';



function Ingame() {
    const navigate = useNavigate();
    
    const handleButtonClick = (bAction:string) => {
        if(bAction === 'quit') {
          navigate('/');
        }
    };

    return (
        <>
            <img src={IngameBackground} alt="Background" className="background-image" />
            <div className='main-menu'>
                <div className='menu-container'>
                    <Btn imgSource={ IngameMenu } onClick={() => handleButtonClick('quit')}/>
                </div>
            </div>
        </>
    );
}

export default Ingame