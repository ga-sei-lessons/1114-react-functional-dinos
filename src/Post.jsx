// no need for importing React or the basee Component from 'react'
import Comment from "./Comment"

// // exporting and defining the function on one line
// export default function Post(props) {

//     // map the comments that are in the props
//     const comments = props.comments.map((comment, idx) => {
//         return (
//             <Comment 
//                 key={`comment${idx}`}
//                 content={comment}
//             />
//         )
//     })
//     // return some jsx
//     return (
//         <div>
//             <h2>{props.title}</h2>

//             <p>{props.body}</p>

//             <p>by: {props.author}</p>

//             {/* render them comments */}
//             <h3>Comments:</h3>

//             {comments}
//         </div>
//     )
// }

// using object destructing syntax to pluck out the name of the keys in the props object
export default function Post({title, author, body, comments}) {
    // render comments in our main function body
    const commentComponents = comments.map((comment, idx) => {
        return (
            <Comment 
                key={`comment${idx}`}
                content={comment}
            />
        )
    })

    return (
        <div>
            <h2>{title}</h2>

            <p>{body}</p>

            <p>by: {author}</p>

            {/* render them comments */}
            <h3>Comments:</h3>

            {commentComponents}
        </div>
    )
}

// this is how react renders each post
// react passes the props in as an argument when it 
// invokes the function
// Post({ title: 'post title' , body: 'post body', ...})