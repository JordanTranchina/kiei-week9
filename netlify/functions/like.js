// /.netlify/functions/like
let firebase = require('./firebase')

exports.handler = async function (event) {
  let db = firebase.firestore()
  let body = JSON.parse(event.body)
  let postId = body.postId
  let userId = body.userId

  console.log(`post id is ${postId}`);
  console.log(`user id is ${userId}`);


  let querySnapshot = await db.collection("likes").where("postId", "==", postId).where("userId", "==", userId)
  let numberOfLikes = querySnapshot.size

  if (numberOfLikes == 0) {
    await db.collection("likes").add({
      w
      postId: postId,
      userId: userId
    })
  } else {
    return {
      statusCode: 400
    }
  }

  // 🔥🔥🔥 Code-Along
  // Implement the like function

}