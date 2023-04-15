/**
 * This file contains the EventBox component
 * @name EventBox.jsx
 * @author @moSaeed15
 */

/**
Renders a box containing information about an event
@param {Object} props - The props object containing the event's information
@param {string} props.image - The URL of the event's image
@param {string} props.eventTitle - The title of the event
@param {string} props.date - The date of the event
@param {string} props.description - The description of the event
@param {boolean} props.isFree - Indicates whether the event is free or not
@param {string} props.organizer - The name of the event's organizer
@param {number} props.followers - The number of followers for the event
@return {JSX.Element} A React component representing the event box
*/
export default function EventBox(props) {
  return (
    <div className="event__box">
      <img src={props.image} alt="event image" />
      <h5 data-testid="img">{props.eventTitle}</h5>
      <h6>{props.date}</h6>
      <p>{props.description}</p>
      {props.isFree && <p className="free">Free</p>}
      <span>{props.organizer}</span>
      <span>{props.followers}</span>
    </div>
  );
}
