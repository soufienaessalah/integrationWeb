import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
      <header className="relative w-full h-[110px] bg-[#2F8BA1] flex items-center justify-center font-[\'Pixelify Sans\']">
        {/* Logo */}
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="absolute left-0 top-[11px] w-[462px] h-[244px]"
        />
        <div>
      <svg
        width="118"
        height="81"
        viewBox="0 0 118 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[20px] right-[632px] -translate-x-1/2 w-[118px] h-[81px]"
      >
        <path
          d="M118 40.5C81.8559 49.2353 92.5193 81 59.602 81C26.6847 81 36.1224 50.625 0 40.5C0 18.1325 26.6847 0 59.602 0C92.5193 0 118 18.1325 118 40.5Z"
          fill="#DE554A"
        />
      </svg>
    </div>
        {/* Menu */}
        <nav className="absolute left-[410px] top-[39px] flex gap-6 text-white text-[24px]">
          {['MarketPlace', 'Blogs', 'Events', 'Community', 'Contact'].map((item, index) => (
            <button key={index} className="hover:underline">{item}</button>
          ))}
        </nav>
        
        <button 
        className="absolute"
        style={{
          left: '1124px',
          top: '34px',
          width: '109px',
          height: '45px',
          backgroundColor: '#DE554A',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Pixelify Sans',
        }}
      >
       LOGOUT
      </button >
      <img
        src="/images/image4.png"
        alt="Image4"
        className="absolute"
        style={{
          left: "1273px",
          top: "11px",
          width: "113px",
          height: "110.86px",
        }}/>
      </header>
    );
  };
  
  export default Header;
  