// export default function Comment(props) {
//     return (
//         <div>
//             <p>{props.content}</p>
//         </div>
//     )
// }

// using an arrow functions
// const Comment = (props) => {
//         return (
//         <div>
//             <p>{props.content}</p>
//         </div>
//     )
// }

// using a multiline implicit return arrow function
// (makes it so you cannot use state or react lifecycle)
const Comment = props => (
    <div>
        <p>{props.content}</p>
    </div>
)

export default Comment