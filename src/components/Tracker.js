import { StyledTracker } from "./styled/Styled.Tracker";
import { StyledInput } from "./styled/Styled.Input";
import { StyledButton } from "./styled/Styled.Button";

const Tracker = (props) => {
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

                <StyledButton onClick={props.handleClick}>
                    <img
                        src='./images/icon-arrow.svg'
                        alt='Enter Ip address'
                    ></img>
                </StyledButton>
            </div>
        </StyledTracker>
    );
};

export default Tracker;
