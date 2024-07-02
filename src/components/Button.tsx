import ButtonClick from '../assets/audio/soundEffects/global/BUTTON.mp3'

interface BtnProps {
    imgSource: string;
    bAction?: string;  // Optional if you want to pass different actions
}

const Btn: React.FC<BtnProps> = ({ imgSource }) => {

    const handleButtonClick = () => {
        const audio = new Audio(ButtonClick);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    };

    return (
        <button className="menu-button" onClick={() => handleButtonClick()}>
            <img src={imgSource} alt={imgSource} className="menu-icon" />
        </button>
    );
};

export default Btn;