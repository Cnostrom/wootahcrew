// import React, { Component } from 'react';
// import Popup from "reactjs-popup";


// const contentStyle = {
//   maxWidth: "600px",
//   width: "90%"
// };

// export default class CommentForm extends Component {
//   state= {
//     comment:''
//   }
//   handleClickSubmit = (close) => {
//     const comment = {
//       id: this.props.user.id,
//       author: this.props.user.username,
//       comment: this.state.comment
//     }
//     if (this.state.comment !== '') {
//       this.props.addComment(comment)
//       close()
//     }

//   }

//   handleChange = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     this.setState({ [key]: value })
//   }


//   render() {
//     return (
//       <div className='comment-popup-box'>
//         <Popup
//           trigger={<button className="comment"> Comment </button>}
//           modal
//           contentStyle={contentStyle}
//         >
//           {close => (
//             <div className="commentForm">
//               <a className="close" href={'../Dashboard/Dashboard'} onClick={close}>
//                 &times;
//       </a>
//               <div className="header"> Comment on this post </div>
//               <div className='comment'>
//                 <textarea className='commentInput' type='text' placeholder=' comment ' name='comment' value={this.state.comment} onChange={this.handleChange} />
//               </div>
//               <br />
//               <button
//                 className="submit"
//                 onClick={() => this.handleClickSubmit(close)}
//               >
//                 Submit
//         </button>
//             </div>

//           )}
//         </Popup>
//       </div>
//     )
//   }
// }

