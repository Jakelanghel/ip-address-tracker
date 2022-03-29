import { StyledTracker } from "./styled/Styled.Tracker";
import { StyledInput } from "./styled/Styled.Input";
import { StyledButton } from "./styled/Styled.Button";

const Tracker = (props) => {
    console.log(props);
    return (
        <StyledTracker>
            {props.usrData.error && <p>Invalid Ip Address</p>}
            <label htmlFor='usr-input'>IP Address Tracker</label>
            <div className='container-input'>
                <StyledInput
                    id='urs-input'
                    onChange={props.onChange}
                    value={props.usrData.ip}
                    data={props.usrData}
                    className={props.usrData.error && "error"}
                    placeholder='Enter Ip Address.'
                />

                <button className='input-btn' onClick={props.handleClick}>
                    <img
                        src='https://jakelanghel.github.io/ip-address-tracker//images/icon-arrow.svg'
                        alt='Enter Ip address'
                    ></img>
                </button>
            </div>
            <StyledButton onClick={props.handleUsrIp}>Get your IP</StyledButton>
        </StyledTracker>
    );
};

export default Tracker;
