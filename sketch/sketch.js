


let btn_change = document.querySelector('.btn-change')

btn_change.addEventListener('click', function (e) {
    e.preventDefault()

    let params = {
        active: true,
        currentWindow: true
    }

    let link_img = document.querySelector('.link-img').value

    let link = {
        url: link_img
    }
    
    chrome.tabs.query(params, function (tabs) {
        if (tabs[0].title = "New Tab") {
            chrome.tabs.sendMessage(tabs[0].id, link)
        }
    })
})


