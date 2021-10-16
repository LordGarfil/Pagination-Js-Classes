import { Pagination } from "./components/pagination.js"
import { get } from "./services/request.js"
import { renderCharacters } from "./app.js"

window.onload = async () => {
  const requestData = await get()
  const pagination = new Pagination(requestData.results, 0)
  pagination.init()

  const currentPageText = document.querySelector("small[name=currentPage]")

  renderCharacters(pagination.currentPageData)
  currentPageText.innerHTML = pagination.currentPage + 1

  const prevPageButton = document.querySelector("button[name=prevPage]")
  const nextPageButton = document.querySelector("button[name=nextPage]")
  
  prevPageButton.onclick = function (e) {
    e.preventDefault()
    pagination.prevPage()
    renderCharacters(pagination.currentPageData)
    currentPageText.innerHTML = pagination.currentPage + 1
  }

  nextPageButton.onclick = function (e) {
    e.preventDefault()
    pagination.nextPage()
    renderCharacters(pagination.currentPageData)
    currentPageText.innerHTML = pagination.currentPage + 1
  }
}
