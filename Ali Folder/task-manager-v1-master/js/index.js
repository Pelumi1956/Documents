 (function () {
    let myListItems = []
    let currentItemIndex;
    let listItems = document.getElementsByClassName('list-item');
    let cancelIcons = document.getElementsByClassName('cancel-icon');
    let editIcons = document.getElementsByClassName('edit-icon');
    let viewIcons = document.getElementsByClassName('view-icon');
    let viewModal = document.getElementById('view-modal')
    let overlay = document.getElementById('overlay')
    let editModal = document.getElementById('edit-modal')
    let cancelBtn = document.getElementById('cancel-btn')
    let updateItemFormInput = document.querySelector('.update-form .todo-input')
    let addItemFormInput = document.querySelector('.create-form .todo-input')
    let saveButton = document.querySelector('#save-btn')
    let itemsList = document.getElementById('items-list')


    buildList();

    cancelBtn.addEventListener('click', closeModal)

    overlay.addEventListener('click', closeModal)

    addItemFormInput.closest('form').addEventListener('submit', function(e) {
        if(addItemFormInput.value) {
            addItem(addItemFormInput.value.trim())
        }
    })

    /* Do NOT modify snippets above this line */

    function viewItem()
    {
        // fill modal with item detail
        // show view modal
        showViewItemModal();
    }

    function addItem(item) {
        if(item){
            // complete this part
            myListItems.push(item)
            addItemFormInput.value=""
            buildList()
        }
    }

    function deleteItem(itemId) {
        if(itemId){
            // complete this part
            myListItems.splice(itemId, 1)
            buildList()
        }
        
        
    }

    function updateItem() {
        if (updateItemFormInput.value) {
            // complete this part
            myListItems.splice(currentItemIndex, 1, updateItemFormInput.value)
            buildList()
            closeModal() // abeg no touch me
        }
    }

    /* Do NOT modify snippets below this line */
    
    saveButton.addEventListener('click', function (e) {
        updateItem()


    })

    function editItem(item) {
        updateItemFormInput.value = item.textContent.trim()
        currentItemIndex = item.getAttribute('data-id')
        showEditModal()
    }

    // Build ToDo list for DOM
    function buildList() {
        const myList = myListItems.map((item, index) => {
            return `<li class="list-item" data-id="${index}">${item}<span class="cancel-icon"></span><span class="edit-icon"></span><span class="view-icon"></span></li>`
        }).join("\n")

        itemsList.innerHTML = myList ? myList : '<div>Your list is empty.</div>';

        // Add Click event listener to each list item
        Array.from(listItems).forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                if (e.target.classList.contains('done')) {
                    e.target.classList.remove('done');
                } else {
                    e.target.classList.add('done');
                }
            })
        })

        // Add Click event listener to each cancel icons
        Array.from(cancelIcons).forEach((icon) => {
            icon.setAttribute('title', 'delete')
            icon.addEventListener('click', function (e) {
                const confirmation = window.confirm('Are You Sure You Want To This Item?')
                if(confirmation){
                const itemId = e.target.closest('li').getAttribute('data-id');
                deleteItem(itemId)
                }
            });
        })

        // Add Click event listener to each edit icons
        Array.from(editIcons).forEach((icon) => {
            icon.setAttribute('title', 'edit')
            icon.addEventListener('click', function (e) {
                editItem(e.target.closest('li'))
            });
        })

        //Add Click event listener to each view icons
        Array.from(viewIcons).forEach((icon) => {
            icon.setAttribute('title', 'view')
            icon.addEventListener('click', function (e) {
                viewItem()
            });
        })
    }

    // show modal
    function showEditModal() {
        overlay.classList.remove('d-none');
        editModal.classList.remove('d-none');
    m}

    function showViewItemModal()
    {
        overlay.classList.remove('d-none');
        viewModal.classList.remove('d-none');
    }

    function closeModal()
    {
        closeViewModal()
        closeEditModal()
    }

    // dismiss modal
    function closeEditModal() {
        overlay.classList.add('d-none');
        editModal.classList.add('d-none');
        updateItemFormInput.value = ""
    }

    function closeViewModal() {
        overlay.classList.add('d-none');
        viewModal.classList.add('d-none');
    }
})()