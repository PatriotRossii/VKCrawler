function get_subscriptions(user_page) {
    subscriptions = user_page.querySelector("#profile_idols")
    if(!subscriptions) {
        return
    }
    
    subscriptions = subscriptions[0].querySelectorAll(".line_cell")
    if(!subscriptions) {
        return
    }

    subs = []
    for(idx = 0; idx < subscriptions.length; ++idx) {
        subscription = subscriptions[idx]
        
        subs.push({
            subscription_id: subscription.getAttribute("data-id")
        })
    }
    return subs
}

