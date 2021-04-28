function get_reposts(page) {
    posts = page.querySelectorAll(".copy_author")
    if(!posts) {
        return
    }

    info = []
    for(index = 0; index < posts.length; ++index) {
        post = posts[index]
    
        data_post_id = post.getAttribute("data-post-id")
        data_parent_post_id = post.getAttribute("data-parent-post-id")
    
        pair = data_post_id.split("_")
        source_id = pair[0]
        source_post_id = pair[1]
    
        pair = data_parent_post_id.split("_")
        user_id = pair[0]
        user_post_id = pair[1]
    
        info.push({
            source_id: source_id,
            source_post_id: source_post_id,
            user_id: user_id,
            user_post_id: user_post_id
        })
    }

    return info
}
