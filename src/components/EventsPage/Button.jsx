import { useNavigate } from 'react-router-dom';
const Button = () => {
    const navigate = useNavigate();
    return (
      <button onClick={() => navigate('/event-detail')} className="w-[109px] h-[104px] bg-[#DE554A] rounded-full text-black font-['Pixelify_Sans'] font-bold text-[40px] border-4 border-[#2ABED8]">
        Join
      </button>
    );
};

export default Button;
