import { useState } from 'react';
import DaumPostCode from 'react-daum-postcode'

const AddressInput = ({addressState, addressAction}:any) => {
  const { zonecode, address, detailedAddress } =
    addressState;
  const { setZonecode, setAddress, setDetailedAddress } =
    addressAction ?? {
      setZonecode: () => {},
      setAddress: () => {},
      setDetailedAddress: () => {}
    };

  const [isOpen, setIsOpen] = useState(false);

  const themeObj = {
    bgColor: '#FFFFFF', 
    pageBgColor: '#FFFFFF', 
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '360px',
    height : '480px'
  };

  const completeHandler = (data:any) => {
    const {address, zonecode} = data;
    console.log("why : ", zonecode);
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = (state:any) => {
    if(state === 'FORCE_CLOSES') {
      setIsOpen(false);
    } else if(state === 'COMPLETE_CLOSE'){
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const inputChangeHandler = (e:any) => {
    setDetailedAddress(e.target.value);
  }
  return (
    <div>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>주소<span className="required">*</span></p>
        <button
            type="button"
            onClick={toggleHandler}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ffffff',
              border: '1px solid #d9d9d9',
              borderRadius: '10px'
            }}
          >
            찾기
          </button>
      </div>
      <div>
        <div style={{marginBottom: '0.5rem'}}>{zonecode}</div>
        {isOpen && (
          <div>
            <DaumPostCode
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        )}
        <div style={{
          width: '320px',
          height: '48px',
          borderRadius: '5px',
          border: '1px solid #D1D1D1',
          textAlign: "left",
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
          marginBottom: '0.5rem'
        }}>{address}</div>
        <p style={{ marginBottom: '0.5rem', marginTop: '1rem'}}>상세주소<span className="required">*</span></p>
        <input
          value={detailedAddress}
          onChange={inputChangeHandler}
          placeholder='상세주소를 입력해주세요'
          style={{
            width: '320px',
            height: '48px',
            borderRadius: '5px',
            border: '1px solid #D1D1D1',
            textAlign: "left",
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            marginBottom: '1rem',
            fontSize: '14px'
          }}
        />
      </div>
    </div>
  )
}

export default AddressInput;