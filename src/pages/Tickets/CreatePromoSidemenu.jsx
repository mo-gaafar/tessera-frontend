import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import { CreatePromoSideMenu, CsvPromocode } from './styles/Tickets.styled';

export function CreatePromocode(props) {
  
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState('unlimited');
  const [quantity, setQuantity] = useState('');
  const [isError, setIsError] = useState(false);
  const [Discountquantity, setDiscountQuantity] = useState('');
  const [isDError, setIsDError] = useState(false);
  
  const showError = touched && name.trim() === '';
  const handleAmountChange = e => {
    const inputValue = e.target.value;
    // Check if input value is a number
    if (!isNaN(inputValue) || inputValue === '') {
      setQuantity(inputValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleAmountBlur = e => {
    const inputValue = e.target.value;
    // Check if input value is empty or not a number
    if (inputValue === '' || isNaN(inputValue)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleDiscountChange = e => {
    const inputValue = e.target.value;
    // Check if input value is a number
    if (!isNaN(inputValue) || inputValue === '') {
      setDiscountQuantity(inputValue);
      setIsDError(false);
    } else {
      setIsDError(true);
    }
  };

  const handleDiscountBlur = e => {
    const inputValue = e.target.value;
    // Check if input value is empty or not a number
    if (inputValue === '' || isNaN(inputValue)) {
      setIsDError(true);
    } else {
      setIsDError(false);
    }
  };

  return (
    <CreatePromoSideMenu>
      {props.isPromocodeMenuOpen && (
      <div className='MainCreatePromoopen'>
        <div className="CodeNameTextboxdiv">
          <div className="AddCodeMenuHeaderDiv">Add code</div>

          <div className="PromocodeInfoDiv">
            <div className={`CodeNameDiv ${showError ? 'error' : ''}`}>
              <div className={`NameLabelDiv ${showError ? 'error' : ''}`}>
                Code name
                <span className="eds-label__required-indicator eds-text-bs" data-spec="required-indicator">
                  <span className="asterisk"> *</span>
                </span>
              </div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setValue(event.target.value)}
                onBlur={ () => setTouched(true)}
                className={`CodeNameInput ${showError ? 'error' : ''}`}
              />
            </div>
            {showError ? (
              <div className="error-message">Please provide a code name</div>
            ) : (
              <div className="message">
                Customers can also access this code via custom URL
              </div>
            )}

            <div className='TicketLimitDiv'>
                <div className="DropdownDiv">

                 <div className='LimitDropdownDiv'>
                 <span className='TicketLimitLabel'>Ticket limit</span>
                <select className='LimitDropdown' value={value} onChange={(event) => setValue(event.target.value)}>
                <option value="limited">Limited to</option>
                <option value="unlimited">Unlimited</option>

                </select>
                </div>
                {value === 'limited' && (
                <div className="LimitedAmountDiv">

                    <div className='LimitedAmountDiv'>
                    <div className={isError ? "LimitedAmountTextboxDiv error-color" : "LimitedAmountTextboxDiv"}>
                    <div className={isError ? "LimitedAmountLabelDiv error-color" : "LimitedAmountLabelDiv"}>Amount<span class="eds-label__required-indicator eds-text-bs" data-spec="required-indicator"><span className='asterisk'> *</span></span></div>
                    <input
                    type="text"
                    value={quantity}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                    className="AmountInput"
                    />
                    {isError && <div className="AmountError">Ticket limit quantity required</div>}
                    </div>
                </div>
                <div className='TicketsLabel'>
                            tickets
                    </div>
                </div>
                )}
            </div>

             </div>
             <div className='TextUnderLimited'>Total number of tickets that can be purchased with this code</div>

             <div className='DiscountDiv'>
                <div className='DiscountsLabel'>
                Discount amount
                </div>
                    <div className={isDError ? "DiscountAmountDiv error-color" : "DiscountAmountDiv"}>

                    <span className='DollarSignDiv'>$</span>
                    <input
                    type="text"
                    value={Discountquantity}
                    onChange={handleDiscountChange}
                    onBlur={handleDiscountBlur}
                    className="DiscountInput"
                    />
                    </div>
                    {isDError && <div className="DiscountError">Discount amount or percentage required</div>}
                </div>
          </div>

        <div className='ButtonsMenuDiv'>

            <button className=' CancelButton' onClick={()=>props.setIsPromocodeMenuOpen(false)}>Cancel</button>

            <button className='SaveButton' onClick={()=>{props.setIsPromoIntroOpen(false);props.setIsPromocodeMenuOpen(false);}} >Save </button>

        </div>

        </div>
      </div>)}
    </CreatePromoSideMenu>

   
  );
}
