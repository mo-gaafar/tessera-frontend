import { useNavigate } from 'react-router-dom';
export default function CategoriesTile(props) {
  const handleClick = () => {
        props.handleClickCat(props.title);
      };
  return(
      <div
      onClick={handleClick}
      name={props.title}
      className='tile'>
      <div style={{backgroundColor:'#fdf7f5', height:'100%', padding:'1.5rem'}}>
        <svg 
          id="music-note_svg__eds-icon--music-note_svg"
          x="0" y="0"
          viewBox="0 0 24 24" 
          xml:space="preserve">
          <path 
          style={{fill:'#f05537'}}
            id="music-note_svg__eds-icon--music-note_base"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
          </path>
        </svg>
      </div>
      
      <p>{props.title}</p>

    </div>

    // <div className='tile'>
    //   <div style={{backgroundColor:'#fdf7f5', height:'100%', padding:'1.5rem'}}>
    //     <svg 
    //       id="music-note_svg__eds-icon--music-note_svg"
    //       x="0" y="0"
    //       viewBox="0 0 24 24" 
    //       xml:space="preserve">
    //       <path 
    //       style={{fill:'#f05537'}}
    //         id="music-note_svg__eds-icon--music-note_base"
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
    //       </path>
    //     </svg>
    //   </div>
      
    //   <p>{props.name}</p>

    // </div>

    // <div className='tile'>
    //   <div style={{backgroundColor:'#fdf7f5', height:'100%', padding:'1.5rem'}}>
    //     <svg 
    //       id="music-note_svg__eds-icon--music-note_svg"
    //       x="0" y="0"
    //       viewBox="0 0 24 24" 
    //       xml:space="preserve">
    //       <path 
    //       style={{fill:'#f05537'}}
    //         id="music-note_svg__eds-icon--music-note_base"
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
    //       </path>
    //     </svg>
    //   </div>
      
    //   <p>{props.name}</p>

    // </div>

    // <div className='tile'>
    //   <div style={{backgroundColor:'#fdf7f5', height:'100%', padding:'1.5rem'}}>
    //     <svg 
    //       id="music-note_svg__eds-icon--music-note_svg"
    //       x="0" y="0"
    //       viewBox="0 0 24 24" 
    //       xml:space="preserve">
    //       <path 
    //       style={{fill:'#f05537'}}
    //         id="music-note_svg__eds-icon--music-note_base"
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
    //       </path>
    //     </svg>
    //   </div>
      
    //   <p>{props.name}</p>

    // </div>
    
    // </div>
    
  )
  

}