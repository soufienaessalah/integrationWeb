import Rectanglex from "./Rectanglex";
import Rectangley from "./Rectangley";
import Rectangley2 from "./Rectangley2";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const EventsPage = () => {
    const [selectedImage, setSelectedImage] = useState("/images/image1.png");
    const handleImageChange = (imagePath) => {
        setSelectedImage(imagePath);
      };
  return (
    
    <div className="relative w-full h-screen ">
        
         <div
        className="absolute"
        style={{
          left: '185px',
          top: '208px',
          fontSize: '96px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Soon ...
      </div>
      <img
        src="/images/image.png" // Le chemin relatif dans public
        alt="Image"
        className="absolute"
        style={{
          left: '987px',
          top: '192px',
          width: '361.69px',  // Définir la largeur
          height: '546.76px',  // Définir la hauteur
        }}
      />
     
      <div className="absolute left-[85px] top-[366px]">
        <Rectanglex />
      </div>
      <div className="absolute left-[153px] top-[328px]">
        <Rectangley />
      </div>
      <div className="absolute left-[229px] top-[366px]">
        <Rectangley2 />
      </div>
      <div className="absolute left-[831px] top-[607px]">
        <Button />
      </div>
      <div
        className="absolute"
        style={{
          left: '312px',
          top: '776.62px',
          width: '65.48px',
          height: '41.61px',
          backgroundColor: '#D9D9D9',
          border: '1px solid #000000',
        }}
      ></div>
 <img
        src={selectedImage}
        alt="Selected Event"
        className="absolute"
        style={{
          left: "249px",
          top: "391px",
          width: "503px",
          height: "314px",
        }}
      />
      {/* Textes avec position et typographie spécifique */}
      <button
        className="absolute"
        style={{
          left: "333.05px",
          top: "774.31px",
          fontFamily: "Pixelify Sans",
          fontSize: "46.24px",
          width: "24.56px",
          height: "46.24px",
        }}
        onClick={() => handleImageChange("/images/image1.png")}
      >
        1
      </button>

      <button
        className="absolute"
        style={{
          left: "407.89px",
          top: "772px",
          fontFamily: "Pixelify Sans",
          fontSize: "46.24px",
          width: "24.56px",
          height: "46.24px",
        }}
        onClick={() => handleImageChange("/images/imagexx.jpg")}
      >
        2
      </button>

      <button
        className="absolute"
        style={{
          left: "455.83px",
          top: "772px",
          fontFamily: "Pixelify Sans",
          fontSize: "46.24px",
          width: "24.56px",
          height: "46.24px",
        }}
        onClick={() => handleImageChange("/images/imageyy.jpg")}
      >
        3
      </button> 

      <button
        className="absolute"
        style={{
          left: '503.77px',
          top: '772px',
          fontFamily: 'Pixelify Sans',
          fontSize: '46.24px',
          width: '24.56px',
          height: '46.24px',
        }}
      >
        4
      </button>

      <div
        className="absolute"
        style={{
          left: '565px',
          top: '772px',
          fontFamily: 'Pixelify Sans',
          fontSize: '46.24px',
          width: '24.56px',
          height: '46.24px',
        }}
      >
        ...
      </div>

      <div
        className="absolute"
        style={{
          left: '627.73px',
          top: '772px',
          fontFamily: 'Pixelify Sans',
          fontSize: '46.24px',
          width: '24.56px',
          height: '46.24px',
        }}
      >
        80
      </div>
      <div
        className="absolute"
        style={{
          left: '272px',
          top: '1061.74px',
          fontSize: '96px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Best participants
      </div>
      {/* Bouton rectangle avec couleur spécifique */}
      <button 
        className="absolute"
        style={{
          left: '402px',
          top: '870px',
          width: '631px',
          height: '93px',
          backgroundColor: '#DE554A',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Pixelify Sans',
        }}
      >
        SEE PREVIOUS EVENTS
      </button >

      {/* Rectangle de couleur spécifique */}
      <div
        className="absolute"
        style={{
          left: '335px',
          top: '1508.96px',
          width: '230px',
          height: '310.04px',
          backgroundColor: '#FFC15F',
        }}
      ></div>

      <div
        className="absolute"
        style={{
          left: '567px',
          top: '1441.31px',
          width: '244px',
          height: '377.69px',
          backgroundColor: '#2F8BA1',
        }}
      ></div>

      <div
        className="absolute"
        style={{
          left: '811px',
          top: '1546.54px',
          width: '258px',
          height: '272.46px',
          backgroundColor: '#DE554A',
        }}
      ></div>
        <img
        src="/images/image5.png"
        alt="Image5"
        className="absolute"
        style={{
          left: "-84px",
          top: "1964.4px",
          width: "710.58px",
          height: "338.53px",
        }}
      />
       <img
        src="/images/image2.png"
        alt="Image2"
        className="absolute"
        style={{
          left: "330px",
          top: "1285.35px",
          width: "226px",
          height: "220.79px",
        }}
      />
       <img
        src="/images/image3.png"
        alt="Image3"
        className="absolute"
        style={{
          left: "549px",
          top: "1191.4px",
          width: "226px",
          height: "220.79px",
        }}
      />
       <img
        src="/images/image4.png"
        alt="Image4"
        className="absolute"
        style={{
          left: "812px",
          top: "1325.75px",
          width: "226px",
          height: "220.79px",
        }}/>
      
      <div
  className="absolute"
  style={{
    left: '-8px',
    top: '1925px',
    width: '1456px',
    height: '152px',
    backgroundColor: '#DE554A',
  }}
></div>

    </div>
    
    
  );
};

export default EventsPage;
