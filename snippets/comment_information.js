replies = document.querySelectorAll(".reply")

for(idx = 0; idx < replies.length; ++idx) {
    element = replies[idx]

    post_id = element.getAttribute("data-post-id").split("_")
    user_id = post_id[0]
    post_id = post_id[1]

    answering_id = element.querySelector(".reply_author").
        querySelector(".author").getAttribute("data-from-id")
    content = element.querySelector(".wall_reply_text").innerText

    commentInfo = {
        user_id: user_id,
        post_id: post_id,
        from_id: answering_id,
        content: content
    }
    console.log(commentInfo)
}