information = document.querySelectorAll(".profile_info_row")

user_id_element = document.querySelector(".PageActionItem--abuse")
if(user_id_element) {
    user_id = user_id_element.getAttribute("data-user_id")
} else {
    // Пользователь доносит на себя. Запретим
}

page_name = document.querySelector(".page_name").innerText

status_element = document.querySelector(".my_current_info")
if(status_element) {
    status_info = status_element.innerText
} else {
    status_info = undefined
}

console.log("user_id:", user_id)
console.log("page_name:", page_name)
console.log("status:", status_info)

for (index = 0; index < information.length; ++index) {
    element = information[index]

    name = element.children[0].innerText.replace(":", "")
    value_element = element.children[1]

    if (value_element.children.length == 0) {
        value = value_element.innerText.split(", ")
    } else {
        flag = false
        value = []

        childrens = value_element.children
        for(idx = 0; idx < childrens.length; ++idx) {
            e = childrens[idx]
            if(e.attributes.mention_id) {
                trimmed_inner = e.innerText.trim()
                if (trimmed_inner) {
                    value.push({
                        value: trimmed_inner,
                        id: e.attributes.mention_id.value.replace("id", "").replace("club", "-")
                    })
                    flag = true
                }
            }
        }

        if(!flag) {
            value = value_element.innerText.split(", ")
        }

    }

    console.log(name + ":", value)
}