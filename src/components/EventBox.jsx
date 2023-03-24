export default function EventBox(props) {
  return (
    <div className="event__box">
      <img src={props.image} alt="event image" />
      <h5 data-testid="img">{props.eventTitle}</h5>
      <h6>{props.date}</h6>
      <p>{props.description}</p>
      {props.isFree && <p className="free">Free</p>}
      <span>{props.organizer}</span>
      <span>
        <img src="../../src/assets/follower.png" alt="follower img" />
        {props.followers}
      </span>
    </div>
  );
}
