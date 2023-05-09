import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import { CreatePromoSideMenu,CsvPromocode } from './styles/Tickets.styled';





export function CreatePromocode(props) {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleInputBlur = () => {
    setTouched(true);
  };

  const showError = touched && name.trim() === '';

///////////////////////
  const [value, setValue] = useState('unlimited');

  const handleDropdownChange = (event) => {
    setValue(event.target.value);
  };

  ////////////////////////
  const [quantity, setQuantity] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAmountChange = (e) => {
      const inputValue = e.target.value;
      // Check if input value is a number
      if (!isNaN(inputValue) || inputValue === "") {
      setQuantity(inputValue);
      setIsError(false);
      } else {
      setIsError(true);
      }
  };

  const handleAmountBlur = (e) => {
      const inputValue = e.target.value;
      // Check if input value is empty or not a number
      if (inputValue === "" || isNaN(inputValue)) {
      setIsError(true);
      } else {
      setIsError(false);
      }
  };
////////////////////
const [Discountquantity, setDiscountQuantity] = useState("");
const [isDError, setIsDError] = useState(false);

const handleDiscountChange = (e) => {
    const inputValue = e.target.value;
    // Check if input value is a number
    if (!isNaN(inputValue) || inputValue === "") {
        setDiscountQuantity(inputValue);
        setIsDError(false);
    } else {
        setIsDError(true);
    }
};

const handleDiscountBlur = (e) => {
    const inputValue = e.target.value;
    // Check if input value is empty or not a number
    if (inputValue === "" || isNaN(inputValue)) {
        setIsDError(true);
    } else {
        setIsDError(false);
    }
};

///////////////////////////////////csv upload AND validation
const handleFileUpload = (event) => {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const fileContents = reader.result;
    // Perform validation on the file contents
    const lines = fileContents.split(/\r\n|\n/);
    let promoCodeCount = 0;
    let isValid = true;
    for (let line of lines) {
      if (line.trim() === '') {
        // Ignore empty lines
        continue;
      }
      const promoCodes = line.split(/[\s,]+/);
      for (let promoCode of promoCodes) {
        if (promoCode.length > 30) {
          // Promo code is too long
          isValid = false;
          break;
        }
        if (/[^a-zA-Z0-9-_@.,]/.test(promoCode)) {
          // Promo code contains invalid characters
          isValid = false;
          break;
        }
        promoCodeCount++;
      }
    }
    if (promoCodeCount > 500) {
      // Too many promo codes
      isValid = false;
    }
    if (!isValid) {
      // File is not valid
      alert('Invalid file format or contents');
      return;
    }
    // File is valid
    console.log(selectedFile);
    console.log(fileContents);
    // Do something with the file
  };
  reader.readAsText(selectedFile);
};



  return (
    // <CreatePromoSideMenu>
    //   <div className={props.isCreatePromoMenuOpen ? 'MainCreatePromoopen' : 'closed'}>
    //     <div className="CodeNameTextboxdiv">
    //       <div className="AddCodeMenuHeaderDiv">Add code</div>

    //       <div className="PromocodeInfoDiv">
    //         <div className={`CodeNameDiv ${showError ? 'error' : ''}`}>
    //           <div className={`NameLabelDiv ${showError ? 'error' : ''}`}>
    //             Code name
    //             <span className="eds-label__required-indicator eds-text-bs" data-spec="required-indicator">
    //               <span className="asterisk"> *</span>
    //             </span>
    //           </div>
    //           <input
    //             type="text"
    //             name="name"
    //             value={name}
    //             onChange={handleInputChange}
    //             onBlur={handleInputBlur}
    //             className={`CodeNameInput ${showError ? 'error' : ''}`}
    //           />
    //         </div>
    //         {showError ? (
    //           <div className="error-message">Please provide a code name</div>
    //         ) : (
    //           <div className="message">
    //             Customers can also access this code via custom URL
    //           </div>
    //         )}


    //         <div className='TicketLimitDiv'>
    //             <div className="DropdownDiv">

    //              <div className='LimitDropdownDiv'>   
    //              <span className='TicketLimitLabel'>Ticket limit</span>
    //             <select className='LimitDropdown' value={value} onChange={handleDropdownChange}>
    //             <option value="limited">Limited to</option>
    //             <option value="unlimited">Unlimited</option>
                
    //             </select>
    //             </div>
    //             {value === 'limited' && (
    //             <div className="LimitedAmountDiv">
                    
    //                 <div className='LimitedAmountDiv'>
    //                 <div className={isError ? "LimitedAmountTextboxDiv error-color" : "LimitedAmountTextboxDiv"}>
    //                 <div className={isError ? "LimitedAmountLabelDiv error-color" : "LimitedAmountLabelDiv"}>Amount<span class="eds-label__required-indicator eds-text-bs" data-spec="required-indicator"><span className='asterisk'> *</span></span></div>
    //                 <input
    //                 type="text"
    //                 value={quantity}
    //                 onChange={handleAmountChange}
    //                 onBlur={handleAmountBlur}
    //                 className="AmountInput"
    //                 />
    //                 {isError && <div className="AmountError">Ticket limit quantity required</div>}
    //                 </div>
    //             </div>
    //             <div className='TicketsLabel'>
    //                         tickets
    //                 </div>
    //             </div>
    //             )}
    //         </div>
            
    //          </div>
    //          <div className='TextUnderLimited'>Total number of tickets that can be purchased with this code</div>
          
          
    //          <div className='DiscountDiv'>
    //             <div className='DiscountsLabel'>
    //             Discount amount
    //             </div>
    //                 <div className={isDError ? "DiscountAmountDiv error-color" : "DiscountAmountDiv"}>

    //                 <span className='DollarSignDiv'>$</span>
    //                 <input
    //                 type="text"
    //                 value={Discountquantity}
    //                 onChange={handleDiscountChange}
    //                 onBlur={handleDiscountBlur}
    //                 className="DiscountInput"
    //                 />
    //                 </div>
    //                 {isDError && <div className="DiscountError">Discount amount or percentage required</div>}
    //             </div>
    //       </div>

        

    //     <div className='ButtonsMenuDiv'>

    //         <button className=' CancelButton' onClick={props.handleCloseCreatePromoMenu}>Cancel</button>

    //         <button className='SaveButton' >Save </button>
                
    //     </div>
            
    //     </div>
    //   </div>
    // </CreatePromoSideMenu>

    <CsvPromocode>
    <div className={props.isCreatePromoMenuOpen ? 'MainCsvPromoOpen' : 'closed'}>

    <div className="UploadCsvMenuHeaderDiv">Upload CSV</div>
  

      <div className='CsvPromoInfoDiv'>

        <p className='CsvTexts'>Upload up to 500 codes from a .csv or .txt file.<br /> <br />  Separate codes with commas, or list them on separate lines.<br />  <br />Spaces, apostrophes, and special characters (except: -_ , @ . ) are not allowed.</p>

        <div className='ImportCsvCardDiv'onClick={() => document.getElementById('csvFileInput').click()}>

        <span class="CalendarIconSpan"><i class="eds-vector-image eds-icon--small eds-vector-image--grey-800" data-spec="icon" data-testid="icon" aria-hidden="true"><svg className='CalendarSvg' xml:space="preserve"><path id="calendar-chunky_svg__eds-icon--calendar-chunky_base" d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></path></svg></i></span>
            
            <div className='ImportCodesDiv'>
                <div className='ImportCodesText'>
                        Import codes
                        
                </div>
                <div className='DragAndDrop'>
                        Click to upload CSV
                </div>

            </div>

                <input
        id="csvFileInput"
        type="file"
        accept=".csv,.txt"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />

        </div>

        <div className='TicketLimitDiv'>
                <div className="DropdownDiv">

                 <div className='LimitDropdownDiv'>   
                 <span className='TicketLimitLabel'>Ticket limit</span>
                <select className='LimitDropdown' value={value} onChange={handleDropdownChange}>
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
                    <input
                    type="text"
                    value={Discountquantity}
                    onChange={handleDiscountChange}
                    onBlur={handleDiscountBlur}
                    className="DiscountInput"
                    />
                    <span className='DollarSignDiv'>%</span>
                    </div>
                    {isDError && <div className="DiscountError">Discount required. Value should be between 1 and 100</div>}
                </div>
          
      </div>

      <div className='ButtonsMenuDiv'>

    <button className=' CancelButton' onClick={props.handleCloseCreatePromoMenu}>Cancel</button>

    <button className='SaveButton' onClick={props.setIsPromoIntroOpen} >Save </button>

    </div>
      
    </div>
    
    </CsvPromocode>
  );
}



                
                
    
            
             