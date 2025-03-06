const EventDetail = () => {
    return (
      <div className="relative w-full h-screen">
         <img
          src="/images/image6.png"
          alt="Event Detail"
          className="absolute"
          style={{
            left: "157px",
            top: "87px",
            width: "1116px",
            height: "1215px",
          }}
        />
           <div
        className="absolute"
        style={{
          left: '439px',
          top: '181px',
          fontSize: '80px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Event detail
      </div>
      <div
        className="absolute"
        style={{
          left: '307px',
          top: '510px',
          fontSize: '80px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Event name: xxxx
      </div>
      <div
        className="absolute"
        style={{
          left: '307px',
          top: '620px',
          fontSize: '80px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        date: xxxx
      </div>
      <div
        className="absolute"
        style={{
          left: '307px',
          top: '730px',
          fontSize: '80px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Location: xxxx
      </div>
      <div
        className="absolute"
        style={{
          left: '307px',
          top: '855px',
          fontSize: '80px',
          fontFamily: 'Pixelify Sans',
        }}
      >
        Program: xxxx
      </div>
       
          <button 
        className="absolute"
        style={{
          left: '460px',
          top: '1228px',
          width: '535px',
          height: '124px',
          backgroundColor: '#DE554A',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Pixelify Sans',
        }}
      >
        CONFIRM JOIN
      </button >
      </div>
    );
  };
  
  export default EventDetail;