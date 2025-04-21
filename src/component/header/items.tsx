import {Li, Text} from './headerStyle';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ id, text, onClick, profileImage }: any) => {
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Text className="text-placeholder">
        {id === "0" && profileImage && (
          <img 
            src={profileImage} 
            alt="profile" 
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%',
              // marginRight: '8px',
              // verticalAlign: 'middle'
              objectFit: 'cover'
            }} 
          />
        )}
        <span className="text" onClick={onClick}>{text}</span>
      </Text>
    </Li>
  );
};
