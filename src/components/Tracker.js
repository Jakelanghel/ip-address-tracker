import { StyledTracker } from "./styled/Styled.Tracker";
import { StyledInput } from "./styled/Styled.Input";

const Tracker = (props) => {
    return (
        <StyledTracker>
            <h1>Ip Address Tracker</h1>
            <label htmlFor='usr-input'>IP Address Tracker</label>
            <div className='container-input'>
                <StyledInput
                    id='usr-input'
                    onChange={props.onChange}
                    onFocus={props.clearInput}
                    value={props.usrData.ip}
                    className={
                        props.usrData.ip === "Invalid Ip Address" && "error"
                    }
                    placeholder='Enter Ip Address.'
                />

                <button className='input-btn' onClick={props.handleClick}>
                    <img
                        src='https://jakelanghel.github.io/ip-address-tracker//images/icon-arrow.svg'
                        alt='Enter Ip address'
                    ></img>
                </button>
            </div>
        </StyledTracker>
    );
};

export default Tracker;
