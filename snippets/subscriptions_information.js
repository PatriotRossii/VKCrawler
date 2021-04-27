subscriptions = document.querySelector("#profile_idols").querySelectorAll(".line_cell")
subs = []

for(idx = 0; idx < subscriptions.length; ++idx) {
    subscription = subscriptions[idx]

    subscription_info = {
        subscription_id: subscription.getAttribute("data-id")
    }

    subs.push(subscription_info)
}

console.log(subs)