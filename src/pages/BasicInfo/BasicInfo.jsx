//DONE
//Basic Info section 
//you can add tags and remove them 
//drop down lists
//in the tags input the user can only enter characters, numbers and underscore 
//validation for title 
//Fixed Div with 2 buttons

//MISSING
//Labels above the input boxes should change colors
//* beside event title
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import {
  Page,
  Main,
  Div1,
  EventsDiv,
  LowerDiv,
  BasicInfoDiv,
  LocationDiv,
  DateAndTimeDiv,
  EventsButton,
  BackEvents,
  SmallI,
  SmallSvg,
  ArrowPath,
  EventsWord,
  LineDivider,
  MediumI,
  MediumSvg,
  Path,
  IconsDiv,
  InfoDiv,
  SectionTitle,
  ExplanationDiv,
  ExplanationP,
  ExplanationSpan,
  ContentsDiv,
  FieldSet,
  TagsDiv,
  Divider1,
  InputDescription,
  OrganizerInfoLink,
  TypeDropDown,
  TypeDropDown1,
  TypeBorder,
  InputData,
  Form,
  FormDiv,
  Label,
  DropDownDiv,
  DropDownSpan,
  DropDownTitleSpan,
  DropDownArrowSpan,
  DropDownSelect,
  DropDownOption,
  TagsTitleDiv,
  ExplanationDiv2,
  TagsInputDiv,
  InputTagsData,
  TagsLabel,
  UsedButton,
  TagsSmall,
  Aside,
  NumberOfTags,
  CharactersLimit,
  InputData2,
  TagsDisplayedDiv,
  TagsDisplayed,
  SingleTagDiv,
  SingleTag,
  SingleTagSpan,
  CloseButtonDiv,
  CloseButton,
  ErrorMessage,
  FixedDiv,
  FixedInnerDiv,
  FixedButtonDiv
} from './Styles/BasicInfo.styled'
import { Done, Margin } from '@mui/icons-material';
export default function BasicInfo(){
  const [focused,setFocused] = React.useState(false, {flag:false})
  const [title, setTitle] = React.useState("")
  const [inputerror, setinputerror] = React.useState("")
  const [value, setValue] = React.useState("")
  const [tagvalue, setTagValue] = React.useState("")
  const [organizervalue, setOrganizerValue] = React.useState("")
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);

  function handleChange(event){
    setValue(event.target.value);
    //console.log("Value:", value);
    //console.log("count:", count);
  }
  function handleTagChange(event){
    setTagValue(event.target.value)
    setCount(prevCount => event.target.value.length);
  }
  function handleButtonClick(e) {
    //this allows the user to enter 10 tags only 
    if (displayValue.length < 10) {
      setDisplayValue([...displayValue, tagvalue]);
      setTagValue('');
    }
    e.preventDefault();
  }
  //This function doesn't allow the user to enter anything other than letters, numbers and underscores
  function handleKeyPress(event) {
    const format = /^[a-zA-Z0-9_]+$/;
    const key = event.key;
    if (!format.test(key)) {
      event.preventDefault();
    }
  }
  
  //this function allows the user to delete a tag they entered
  function handleTagDelete(index, event) {
    const newDisplayValue = [...displayValue];
    newDisplayValue.splice(index, 1);
    setDisplayValue(newDisplayValue);
    event.preventDefault();
  }
  function handleOrganizerChange(event){
    setOrganizerValue(event.target.value)
  }
  function handleValidation(event){
  if (value.trim() === '') {
    return; // Exit the function if input is empty or only contains whitespace
  }
  }
  const saveButtonStyle ={
    backgroundColor: '#d1410c',
    fill: '#fff',
    color: 'white',
    borderColor: "#d1410c",
  };
  return(
    <div>
      <Page>
        <Main>
          <section>
            <Div1>
              <div>
                <EventsDiv>
                  <EventsButton>
                    <BackEvents>
                      <SmallI>
                        <SmallSvg
                        x="0"
                        y="0" 
                        viewBox="0 0 24 24" 
                        xmlSpace="preserve">
                          <ArrowPath
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8 7l-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z">
                          </ArrowPath>
                        </SmallSvg>
                      </SmallI>
                      <EventsWord>
                        Events
                      </EventsWord>
                    </BackEvents>
                  </EventsButton>
                </EventsDiv>
                <LowerDiv>
                  <form>
                    <BasicInfoDiv>
                      <IconsDiv>
                        <MediumI>
                          <MediumSvg
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z">
                            </Path>
                            <g
                            fillRule="evenodd"
                            clipRule="evenodd">
                              <Path
                              d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                              </Path>
                            </g>
                          </MediumSvg>
                        </MediumI>
                      </IconsDiv>
                      <InfoDiv>
                        <div>
                          <SectionTitle>
                            Basic Info
                          </SectionTitle>
                          <ExplanationDiv>
                            <ExplanationP>
                              <ExplanationSpan>
                                Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                              </ExplanationSpan>
                            </ExplanationP>
                          </ExplanationDiv>
                        </div>
                        <ContentsDiv>
                            <Form >
                              <FormDiv>
                                <Label> 
                                  <span style={{WebkitBoxDirection: "normal"}}>Event Title</span>
                                </Label>
                                <InputData
                                  invalid={focused && value.trim() === ''} 
                                  data-testid="title"
                                  type="text"
                                  maxLength="75" 
                                  name="titleinput" 
                                  id="title-input"
                                  placeholder="Be clear and descriptive."
                                  value={value}
                                  onChange={handleChange}
                                  onFocus={() => setFocused(true)}
                                  />
                                {inputerror && (
                                <span style={{color:"red"}}>{inputerror}</span>
                                )}
                              </FormDiv>
                          </Form>
                          <TagsSmall>
                                <NumberOfTags>
                                <Aside>
                                  {focused && value.trim() === '' && (
                                  <ErrorMessage>Title is required</ErrorMessage>
                                  )}
                                </Aside>
                                </NumberOfTags>
                                <CharactersLimit>
                                  <Aside>
                                    {value.length}/75
                                  </Aside>
                                </CharactersLimit>
                              </TagsSmall>
                            <Form>
                              <FormDiv >
                                <Label> 
                                  <span style={{WebkitBoxDirection: "normal"}}>Organizer</span>
                                </Label>
                                <InputData2 data-testid="input" 
                                  type="input" 
                                  name="enter-organizer" 
                                  id="organizer-input"
                                  placeholder='Tell attendees who is organizing this event.'
                                  value={organizervalue}
                                  onChange={handleOrganizerChange}
                                  onFocus={() => setFocused(true)}
                                  />
                              </FormDiv>
                          </Form>
                            <InputDescription>
                              This profile describes a unique organizer and shows all of the events on one page.
                              <OrganizerInfoLink>View Organizer Info</OrganizerInfoLink>
                            </InputDescription>
                          <FieldSet>
                            <TypeDropDown>
                              <TypeDropDown1>
                                <TypeBorder>
                                  <div>
                                    <div>
                                      <DropDownDiv>
                                        <DropDownSpan>
                                          <DropDownTitleSpan>Type</DropDownTitleSpan>
                                          <DropDownArrowSpan>
                                            <SmallI>
                                              <SmallSvg
                                              x="0"
                                              y="0" 
                                              viewBox="0 0 24 24" 
                                              xmlSpace="preserve">
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                </path>
                                              </SmallSvg>
                                            </SmallI>
                                          </DropDownArrowSpan>
                                        </DropDownSpan>
                                        <DropDownSelect>
                                        <DropDownOption 
                                          value
                                          data-spec="select-option">
                                            Type
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="3" 
                                          data-spec="select-option">
                                            Tradeshow, Consumer Show, or Expo
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="13" 
                                          data-spec="select-option">
                                            Tournament
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="16" 
                                          data-spec="select-option">
                                            Tour
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="2" 
                                          data-spec="select-option">
                                            Seminar or Talk
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="7" 
                                          data-spec="select-option">
                                            Screening
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="12" 
                                          data-spec="select-option">
                                            Rally
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="15" 
                                          data-spec="select-option">
                                            Race or Endurance Event
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="11" 
                                          data-spec="select-option">
                                            Party or Social Gathering
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="100" 
                                          data-spec="select-option">
                                            Other
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="10" 
                                          data-spec="select-option">
                                            Meeting or Networking Event
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="14" 
                                          data-spec="select-option">
                                            Game or Competition
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="5" 
                                          data-spec="select-option">
                                            Festival or Fair
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="8" 
                                          data-spec="select-option">
                                            Dinner or Gala
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="4" 
                                          data-spec="select-option">
                                            Convention
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="1" 
                                          data-spec="select-option">
                                            Conference
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="6" 
                                          data-spec="select-option">
                                            Concert or Performance
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="9" 
                                          data-spec="select-option">
                                            Class, Training, or Workshop
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="18" 
                                          data-spec="select-option">
                                            Camp, Trip, or Retreat
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="17" 
                                          data-spec="select-option">
                                            Attraction
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="19" 
                                          data-spec="select-option">
                                            Appearance or Signing
                                          </DropDownOption>
                                        </DropDownSelect>
                                      </DropDownDiv>
                                    </div>
                                  </div>
                                </TypeBorder>
                              </TypeDropDown1>
                            </TypeDropDown>
                            <TypeDropDown>
                              <TypeDropDown1>
                                <TypeBorder>
                                  <div>
                                    <div>
                                      <DropDownDiv>
                                        <DropDownSpan>
                                          <DropDownTitleSpan>Category</DropDownTitleSpan>
                                          <DropDownArrowSpan>
                                            <SmallI>
                                              <SmallSvg
                                              x="0"
                                              y="0" 
                                              viewBox="0 0 24 24" 
                                              xmlSpace="preserve">
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                </path>
                                              </SmallSvg>
                                            </SmallI>
                                          </DropDownArrowSpan>
                                        </DropDownSpan>
                                        <DropDownSelect>
                                        <DropDownOption 
                                          value
                                          data-spec="select-option">
                                            Category
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="118" 
                                          data-spec="select-option">
                                            Auto, Boat & Air
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="101" 
                                          data-spec="select-option">
                                            Business & Professional
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="111" 
                                          data-spec="select-option">
                                            Charity & Causes
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="113" 
                                          data-spec="select-option">
                                            Community & Culture
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="115" 
                                          data-spec="select-option">
                                            Family & Education
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="106" 
                                          data-spec="select-option">
                                            Fashion & Beauty
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="104" 
                                          data-spec="select-option">
                                            Film, Media & Entertainment
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="110" 
                                          data-spec="select-option">
                                            Food & Drink
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="112" 
                                          data-spec="select-option">
                                            Government & Politics
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="107" 
                                          data-spec="select-option">
                                            Health & Wellness
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="119" 
                                          data-spec="select-option">
                                            Hobbies & Special Interest
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="117" 
                                          data-spec="select-option">
                                            Home & Lifestyle
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="103" 
                                          data-spec="select-option">
                                            Music
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="199" 
                                          data-spec="select-option">
                                            Other
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="105" 
                                          data-spec="select-option">
                                            Performing & Visual Arts
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="114" 
                                          data-spec="select-option">
                                            Religion & Spirituality
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="120" 
                                          data-spec="select-option">
                                            School Activities
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="102" 
                                          data-spec="select-option">
                                            Science & Technology
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="116" 
                                          data-spec="select-option">
                                            Seasonal & Holiday
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="108" 
                                          data-spec="select-option">
                                            Sports & Fitness
                                          </DropDownOption>
                                          <DropDownOption 
                                          value="109" 
                                          data-spec="select-option">
                                            Travel & Outdoor  
                                          </DropDownOption>
                                        </DropDownSelect>
                                      </DropDownDiv>
                                    </div>
                                  </div>
                                </TypeBorder>
                              </TypeDropDown1>
                            </TypeDropDown>
                          </FieldSet>
                          <TagsDiv>
                            <TagsTitleDiv>Tags</TagsTitleDiv>
                            <ExplanationDiv2>
                              Improve discoverability of your event by adding tags relevant to the subject matter.
                            </ExplanationDiv2>
                            <div >
                              <TypeDropDown1 style={{display: "flex"}}>
                                <TagsInputDiv>
                                  <div tabIndex="-1">
                                    <div>
                                      <div style={{position: "relative"}}>
                                        <Divider1>
                                          <Form>
                                            <FormDiv >
                                              <TagsLabel> 
                                                <span style={{WebkitBoxDirection: "normal"}}>Press Enter to add a tag</span>
                                              </TagsLabel>
                                              <InputTagsData
                                                data-testid="tags"
                                                type="input" 
                                                name="taginput" 
                                                id="tags-input"
                                                maxLength="25"
                                                placeholder="Add search keywords to your event"
                                                value={tagvalue}
                                                onChange={handleTagChange}
                                                onKeyPress={handleKeyPress}
                                                onFocus={() => setFocused(true)}
                                                />
                                            </FormDiv>
                                        </Form>
                                        <TagsSmall>
                                          <NumberOfTags>
                                          <Aside>
                                          {displayValue.length}/10 tags
                                          </Aside>
                                          </NumberOfTags>
                                          <CharactersLimit>
                                            <Aside>
                                              {tagvalue.length}/25
                                            </Aside>
                                            </CharactersLimit>
                                        </TagsSmall>
                                      </Divider1>
                                      </div>
                                    </div>
                                  </div>
                                </TagsInputDiv>
                                <UsedButton onClick={handleButtonClick}>Add</UsedButton>
                              </TypeDropDown1>
                                  {displayValue.map((value, index) => (
                                    <TagsDisplayedDiv key={index}>
                                      <TagsDisplayed>
                                        <SingleTagDiv>
                                          <SingleTag>
                                            <SingleTagSpan>
                                              <p>{value}</p>
                                            </SingleTagSpan>
                                            <CloseButtonDiv>
                                              <CloseButton onClick={(event) => handleTagDelete(index, event)}>
                                                <SmallI>
                                                  <SmallSvg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                                                    <path fill="#4b4d63" d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z"></path>
                                                  </SmallSvg>
                                                </SmallI>
                                              </CloseButton>
                                            </CloseButtonDiv>
                                          </SingleTag>
                                        </SingleTagDiv>
                                      </TagsDisplayed>
                                    </TagsDisplayedDiv>
                                  ))}
                            </div>
                          </TagsDiv>
                        </ContentsDiv>
                      </InfoDiv>
                    </BasicInfoDiv>
                    <LineDivider></LineDivider>
                    <LocationDiv>
                    <IconsDiv>
                        <MediumI>
                          <MediumSvg
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z">
                            </Path>
                            <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z">
                            </Path>
                            <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 10h2v1h-2z">
                            </Path>
                            <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 12h1v2h-1z">
                            </Path>
                            <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 15h2v1h-2z">
                            </Path>
                            <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 15h2v1H8z">
                            </Path>
                          </MediumSvg>
                        </MediumI>
                      </IconsDiv>
                      <div>
                        <SectionTitle>
                          Location
                        </SectionTitle>
                        <ExplanationDiv>
                          <ExplanationP>
                            <ExplanationSpan>
                            Help people in the area discover your event and let attendees know where to show up.
                            </ExplanationSpan>
                          </ExplanationP>
                        </ExplanationDiv>
                      </div>
                    </LocationDiv>
                    <LineDivider></LineDivider>
                    <DateAndTimeDiv>
                    <IconsDiv>
                        <MediumI>
                          <MediumSvg
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z">
                            </Path>
                            <g
                            fillRule="evenodd"
                            clipRule="evenodd">
                              <Path
                              d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z">
                              </Path>
                            </g>
                          </MediumSvg>
                        </MediumI>
                      </IconsDiv>
                      <div>
                        <SectionTitle>
                          Date and time
                        </SectionTitle>
                        <ExplanationDiv>
                          <ExplanationP>
                            <ExplanationSpan>
                              Tell event-goers when your event starts and ends so they can make plans to attend.                          </ExplanationSpan>
                          </ExplanationP>
                        </ExplanationDiv>
                      </div>
                    </DateAndTimeDiv>
                    </form>
                </LowerDiv>
              </div>
            </Div1>
          </section>
        </Main>
      </Page>
      <FixedDiv>
        <FixedInnerDiv>
          <FixedButtonDiv>
            <div>
              <UsedButton 
                style={{marginRight: 16}}>
                Discard
              </UsedButton>
              <UsedButton
                style={saveButtonStyle}>
                Save & Continue
              </UsedButton>
            </div>
          </FixedButtonDiv>
        </FixedInnerDiv>
      </FixedDiv>
    </div>
  )
}