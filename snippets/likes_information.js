function get_likes(page) {
    likes = page.querySelectorAll(".like_tt_wrap")
    if(!likes) {
        return
    }

    info = []
    for(idx = 0; idx < likes.length; ++idx) {
        element = likes[idx]
    
        post_id = element.querySelector("._value").id.split("_wall")[1].split("_")
        
        author_id = post_id[0]
        post_id = post_id[1]
    
        likes_info = []
    
        like_elements = element.querySelectorAll(".like_tt_owner")
        for(j = 1; j < like_elements.length; ++j) {
            like_element = like_elements[j]
            likes_info.push(
                {
                    title: like_element.getAttribute("title"),
                    href: like_element.getAttribute("href")
                }
            )
        }
    
        info.push({
            author_id: author_id,
            post_id: post_id,
            likes: likes_info,
        })
    }
    return info
}