import Header from "../header/header";
import Button from "../button/button";

const DetailContainer = ({children, buttonText, onClick}: {children: React.ReactNode, buttonText: string, onClick: () => void}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header/>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {children}
      </div>
      <div style={{ 
        width: "100%", 
        backgroundColor: "white", 
        padding: "10px",
        borderTop: "1px solid #E6E6E6"
      }}>
        <Button 
          type="button" 
          variant="filled" 
          style={{
            width: "100%", 
            height: "50px", 
            borderRadius: "10px"
          }}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
};

export default DetailContainer;
