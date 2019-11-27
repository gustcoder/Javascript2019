function AutoCompleteGust(array,inputID,divID) {
    const Input     = document.getElementById(inputID)
    const Searching = document.getElementById(divID)
    let ShowDiv

    Searching.innerHTML = ""

    if(Input.value == "") {
        ShowDiv = "none"
    }    
    else {
        ShowDiv = "block"
    }    
    Searching.style.display = ShowDiv

    function MyCreateElement(item) {
        let itemSearch
        // transforma strings para Upper para fazer com que a pesquisa funcione sem ser case sensitive
        let itemUpper = item.toUpperCase()
        let InputUpper = Input.value.toUpperCase()

        if ((itemUpper.search(InputUpper) >= 0) && (Input.value != "")) {
            itemSearch = document.createElement("a")
            itemSearch.title = item        
            itemSearch.className = "item-search"
            itemSearch.text = itemSearch.title
            Searching.appendChild(itemSearch)
        }
        // verifica se conteudo de DIV está vazio e se o item do Array é o ultimo para poder garantir que de fato nada foi encontrado
        else if ((Searching.innerHTML == "") && (Input.value != "") && (item == ArraySearch[ArraySearch.length - 1])) {
            Searching.innerHTML = "Nenhum resultado encontrado..."
        }
    }
    array.forEach(MyCreateElement);
}