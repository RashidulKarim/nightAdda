// prob:1

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(res => res.json())
// .then(data => console.log(data))

// prob:2
// const callApi = () => {
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(res => res.json())
// .then(data => displayComment(data))
// }

// const displayComment = (data) => {    
//     const commentContainer = document.getElementById('comment-container');
//     data.forEach(comment => {
//         console.log(comment)
//         const sakib = document.createElement('h1');
//         sakib.innerText = `${comment.id}: ${comment.body}`
//         commentContainer.appendChild(sakib)
//     })

    
// }

// prob: 3
// const loadComment = () =>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then( data => displayComment(data)
//     )
// }
// loadComment()

// const displayComment = (info) => {
// console.log(info)
// info.forEach(com => {
//     const commentContainer = document.getElementById('comment-container');
//     console.log(com);
//     const para = document.createElement('p');
//     para.innerText = `id: ${com.id}: ${com.body}`
//     commentContainer.appendChild(para)
// })
// }

// prob: 5
// const loadComment = () =>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then( data => displayComment(data)
//     )
// }
// loadComment()

// const displayComment = (info) => {
// info.forEach(com => {
//     const commentContainer = document.getElementById('comment-container');
//     const div = document.createElement('div');
//     div.classList.add('comment')
//     div.innerHTML = `
//         <p> ${com.id}: ${com.body} </p>
//         <button onclick="loadSingleComment('${com.id}')">Click Me To Show Detalis</button>
//     `
//     commentContainer.appendChild(div)
// })
// }

// // second para 

// const loadSingleComment = id => {
//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
//     .then(res => res.json())
//     .then(data => displaySingleComment(data)
//     )
// }

// const displaySingleComment = data =>{
//     const signleComment = document.getElementById('single-comment');
//     signleComment.textContent = ''
//     const singleCommentContainer = document.createElement('div');
//     singleCommentContainer.innerHTML = `
//     <p> id: ${data.postId} </p>
//     <p> userId: ${data.id} </p>
//     <p> Name: ${data.name} </p>
//     <p> Email: ${data.email} </p>
//     <p> Comment: ${data.body} </p>
//     `
//     signleComment.appendChild(singleCommentContainer)   
// }

fetch('https://randomuser.m/api/')
.then(res => res.json())
.then(data => {
    displayUser(data.results[0])
    
})

const displayUser = (data) =>{
    console.log(data);
    
    const userContainer = document.getElementById('user-container')
    userContainer.innerHTML = `
    <img src="${data.picture.large}" />
    <p>Name: ${data.name.title} ${data.name.first} ${data.name.last} </p>
    <p>Email: ${data.email} </p>
    <p>Gender: ${data.gender} </p>
    <p> Address: ${data.location.street.number}, ${data.location.street.name}, ${data.location.country} </p>
    `

}