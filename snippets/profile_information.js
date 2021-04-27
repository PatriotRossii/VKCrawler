function get_user_profile(user_page) {
    information = user_page.querySelectorAll(".profile_info_row")

    if(!information) {
        return
    }

    user_id_element = user_page.querySelector(".PageActionItem--abuse")
    if(!user_id_element) {
        return
    }

    user_id = user_id_element.getAttribute("data-user_id")    
    page_name = user_page.querySelector(".page_name").innerText

    status_element = user_page.querySelector(".my_current_info")
    if(status_element) {
        status_info = status_element.innerText
    } else {
        status_info = undefined
    }
    
    fields = {}

    for (index = 0; index < information.length; ++index) {
        element = information[index]

        if(element.children.length != 2) {
            continue
        }

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
                if(name == "Группы") {
                    value.push(
                        {
                            name: e.innerText,
                            domain: e.href.split("vk.com/")[1]
                        }
                    )
                    flag = true
                }
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
        fields[name] = value
    }

    return {
        user_id: user_id,
        page_name: page_name,
        fields: fields
    }
}