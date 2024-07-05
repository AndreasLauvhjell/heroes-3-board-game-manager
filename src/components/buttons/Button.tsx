import ButtonClick from '../../assets/audio/soundEffects/global/BUTTON.mp3'

interface BtnProps {
    imgSource?: string;
    id?: string;
    onClick: (id: string, href?: string) => void;
    href?: string;
}

const Btn: React.FC<BtnProps> = ({ imgSource, id, onClick, href }) => {

    const handleButtonClick = () => {
        const audio = new Audio(ButtonClick);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
        onClick(id, href);
    };

    return (
        <button className="menu-button" onClick={handleButtonClick}>
            <img src={imgSource} alt="Button Icon" className="menu-icon" />
        </button>
    );
};

export default Btn;