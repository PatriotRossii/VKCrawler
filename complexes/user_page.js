import * as m_comments from "../snippets/comment_information.js"
import * as m_likes from "../snippets/likes_information"
import * as m_profile from "../snippets/profile_information"
import * as m_reposts from "../snippets/repost_information"
import * as m_subscriptions from "../snippets/subscriptions_information.js"

VK_DOMAIN = "vk.com"

function print_if(object, predicate) {
    if(predicate(object)) {
        console.log(object)
    }
}
function is_true(object) {
    return object
}

if(document.domain == VK_DOMAIN) {
    comments = m_comments.get_comments(document)
    likes = m_likes.get_likes(document)
    profile = m_profile.get_user_profile(document)
    reposts = m_reposts.get_reposts(document)
    subscriptions = m_subscriptions.get_subscriptions(document)

    print_if(comments, is_true)
    print_if(likes, is_true)
    print_if(profile, is_true)
    print_if(reposts, is_true)
    print_if(subscriptions, is_true)
}