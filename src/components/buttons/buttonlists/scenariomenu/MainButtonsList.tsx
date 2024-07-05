import { useNavigate } from 'react-router-dom';
import Btn from '../../Button';
import '../../../../assets/styles/ScenarioMenu.css'

import Begin from '../../../../assets/images/icons/scenariomenu/begin.png'
import Back from '../../../../assets/images/icons/scenariomenu/back.png'

function MainButtonList() {
    const navigate = useNavigate();

    const handleButtonClick = (bAction:string) => {
      if(bAction === 'back') {
        navigate('/');
      } else if (bAction === 'begin') {
        navigate('/ingame')
      }
    };

    return(
        <div className='scenario-menu'>
            <div className='scenario-container'>
                <ul className="scenario-list">
                    <li>
                        <Btn 
                        imgSource={Begin} 
                        onClick={() => handleButtonClick('begin')}
                        />
                    </li>
                    <li>
                        <Btn 
                        imgSource={Back} 
                        onClick={() => handleButtonClick('back')}
                        />
                    </li>
                </ul>
            </div>  
      </div>
    )
}

export default MainButtonList