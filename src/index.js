import { Pagination } from "./components/pagination.js"

const data = [1,2,3,4,5,6,7,8]

window.onload = () => {
  const pagination = new Pagination(data, 4)
  pagination.init()

  renderData(pagination.getCurrentPageData())

  const prevPageButton = document.querySelector('button[name=prevPage]')
  const nextPageButton = document.querySelector('button[name=nextPage]')

  prevPageButton.onclick = function (e) {
    e.preventDefault()
    pagination.prevPage()
    renderData(pagination.getCurrentPageData())
  }

  nextPageButton.onclick = function (e) {
    e.preventDefault()
    pagination.nextPage()
    renderData(pagination.getCurrentPageData())
  }
}

function renderData(data){
  const dataContainer = document.querySelector('.data-container')
  dataContainer.innerHTML = data
}
