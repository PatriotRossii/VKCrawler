function get_comments(user_page) {
    replies = user_page.querySelectorAll(".reply")
    comments = []

    for(idx = 0; idx < replies.length; ++idx) {
        element = replies[idx]
    
        post_id = element.getAttribute("data-post-id").split("_")
        user_id = post_id[0]
        post_id = post_id[1]
    
        from_id = element.querySelector(".reply_author").
            querySelector(".author").getAttribute("data-from-id")
        content = element.querySelector(".wall_reply_text").innerText
    
        comments.push({
            user_id: user_id,
            post_id: post_id,
            from_id: from_id,
            content: content
        })
    }

    return comments
}