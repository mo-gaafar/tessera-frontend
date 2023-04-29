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
  InputDiv,
  FieldSet,
  TagsDiv,
  EventTitleInputDiv,
  EventTInputDiv,
  EventT2InputDiv,
  PlaceHolderLabel,
  PlaceHolderSpan,
  StarSpan,
  SecondStarSpan
} from './Styles/BasicInfo.styled'
import { Margin } from '@mui/icons-material';
import { Placeholder } from 'react-bootstrap';
import { Input } from '@mui/material';
export default function BasicInfo(){

  return(
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z">
                          </Path>
                          <g
                          fill-rule="evenodd"
                          clip-rule="evenodd">
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
                        <InputDiv>
                          <EventTitleInputDiv>
                            <EventTInputDiv>
                              <EventT2InputDiv>
                                <Placeholder>
                                  <PlaceHolderLabel>
                                    <PlaceHolderSpan>Event Title</PlaceHolderSpan>
                                    <StarSpan>
                                      <SecondStarSpan>*</SecondStarSpan>
                                    </StarSpan>
                                  </PlaceHolderLabel>
                                </Placeholder>
                                <Input
                                placeholder="Be clear and descriptive."
                                maxlength="75"
                                type="text"
                                role="textbox"/>
                              </EventT2InputDiv>
                            </EventTInputDiv>
                          </EventTitleInputDiv>
                        </InputDiv>
                        <div></div>
                        <FieldSet></FieldSet>
                        <TagsDiv></TagsDiv>
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z">
                          </Path>
                          <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z">
                          </Path>
                          <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 10h2v1h-2z">
                          </Path>
                          <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 12h1v2h-1z">
                          </Path>
                          <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 15h2v1h-2z">
                          </Path>
                          <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 15h2v1H8z">
                          </Path>
                        </MediumSvg>
                      </MediumI>
                    </IconsDiv>
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z">
                          </Path>
                          <g
                          fill-rule="evenodd"
                          clip-rule="evenodd">
                            <Path
                            d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z">
                            </Path>
                          </g>
                        </MediumSvg>
                      </MediumI>
                    </IconsDiv>
                  </DateAndTimeDiv>
                  </form>
              </LowerDiv>
            </div>
          </Div1>
        </section>
      </Main>
    </Page>
  )
}