function get_subscriptions(user_page) {
    subscriptions = user_page.querySelector("#profile_idols").querySelectorAll(".line_cell")
    subs = []
    
    for(idx = 0; idx < subscriptions.length; ++idx) {
        subscription = subscriptions[idx]
        
        subs.push({
            subscription_id: subscription.getAttribute("data-id")
        })
    }
    return subs
}

