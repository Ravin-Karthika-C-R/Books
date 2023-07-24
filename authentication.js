function add() {
    bookname = bname.value
    authername = aname.value
    description = des.value
    if (bookname in localStorage) {
        a.innerHTML = `<p> Book already added </p>`

    }
    else {
        user = { bookname, authername, description }
        localStorage.setItem(bookname, JSON.stringify(user))
        alert("Successfully added")

    }
}
function searchPage() {
    window.location = "./book_search.html"
}
function sh(){
    s=sr.value
    if(s in localStorage){
        data=JSON.parse(localStorage.getItem(s))
        if(data.bookname==s){
            l.innerHTML=`<p class="text-danger mt-5"> Book Name : ${s}  </p>`
            m.innerHTML=`<p class="text-danger mt-2"> Auther Name : ${data.authername} </p>`
            n.innerHTML=`<p class="text-danger mt-2"> Description : ${data.description} </p>`
        }
        else{
            alert("Book not registered yet")
        }
    }
    else{
        alert("Please enter book name")
    }
}
