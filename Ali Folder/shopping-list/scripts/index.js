(function () {
    let listItems = []//

    let itemList = document.getElementById('item-list')

    let itemInput = document.getElementById('item-input')

    let closeButton = document.getElementsByClassName('close-btn')


    itemInput.closest('form').addEventListener('submit', function (event) {
        event.preventDefault()
        addToList(itemInput.value)
        itemInput.value = ""
    })


    // complete this function
    function addToList(item) {
        if(item){
            // complete the code here
            listItems.push(item)
        }
        buildList()
    }

    // complete this function
    function removeFromList(item) {
        let itemIndex = item.target.closest('li').attributes['data-id'].value;

        // complete the code here
        listItems.splice(itemIndex, 1)

        buildList()
    }

    function buildList() {
        let items = listItems.map(function (item, ind) {
            return "<li class='list-item' data-id="+ind+">" + item + " <span class='close-btn'>X</span></li>"
        })

        itemList.innerHTML = items.join(" ")
       
        Array.from(closeButton).forEach(element => {
            element.addEventListener('click', removeFromList)
        });
    }

    buildList()
})()                                                                                      