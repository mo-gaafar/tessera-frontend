
/**
  * This file contains the Event card
  * @name Eventbox.jsx
  * @author @MaryamMoataz
 */

/**
Renders a box containing information about an event
@param {Object} props - The props object containing the event's information
@param {string} props.eventName - The URL of the event's name
@param {string} props.eventDateTime - The date and time the event
@param {string} props.eventLocation - The location of the event
@param {string} props.description - The description of the event
@param {string} props.eventPrice - The price of the event
@param {string} props.organizerName - The name of the event's organizer
@param {number} props.organizerFollowers - The number of followers for the event
@return {JSX.Element} A React component representing the event card
*/

export default function MoreEvents(props) {
  return (
    <div className='eventoxDiv'>
      <article className='eventContainer'>

          <div className='eventTextInfo'>
              <div className='eventName'>
                  {props.eventName}
              </div>
              <div className='eventDateTime'> {props.eventDateTime} </div>

              
                  <div className='subcontentDiv'>
                    <div className='eventLocation'> {props.eventLocation} </div>
                    <div className='eventPrice'> {props.eventPrice} </div>
                    <div className='eventOrganizer'>
                        <div className='organizerName'> {props.organizerName} </div>
                        <div className='followersDiv'>
                        <svg className='followersSvg' ><path id="followersPath" fill-rule="evenodd" clip-rule="evenodd" d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"></path><path id="user-chunky_svg__eds-icon--user-chunky_circle" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"></path></svg>
                        {props.organizerFollowers}
                        </div>
                    </div>
                  </div>
              
          </div>
          <div className='eventImageButtons'>
              <div className='imageCard'>
                <img className='image' src={props.imageSrc}/>
              </div>
              <div className='buttonsDiv'>

                <span className='shareSpan' >
                <button aria-pressed="false" className='shareButton' type="button">
                <svg  className='shareSvg'>
                  <path  fill-rule="evenodd" clip-rule="evenodd" d="M18 16v2H6v-2H4v4h16v-4z"></path>
                  <path  fill-rule="evenodd" clip-rule="evenodd" d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"></path>
                  </svg>
              </button>
              </span>

              <span className='likeSpan' >
              <button aria-pressed="false"  className='likeButton' type="button">
              <svg  className='likeSvg'>
              <path  fill-rule="evenodd" clip-rule="evenodd" d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z">

            </path>
            </svg>
            </button>
            </span>
              

              </div>
              
          </div>

      </article>

    </div>

  );
}


