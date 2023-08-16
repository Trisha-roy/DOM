// document.getElementById('btn-post').addEventListener('click',function (){
//    const newComment= document.getElementById('new-comment');
//    const commentText=newComment.value;
//    console.log(commentText)
// })

document.getElementById('btn-post').addEventListener('click',function(){
    const commentBox=document.getElementById('new-comment');
    const textBox=commentBox.value;
    //append
    const commentContainer=document.getElementById('comment-container');
    const p=document.createElement('p');
    p.innerText=textBox;
    commentContainer.appendChild(p)

    //clear the box
    commentBox.value='';
})