export class Pagination {
  constructor(data = [], numberMembers = 5) {
    this.data = data
    this.dataGroup = []
    this.currentPageData = data[0]
    this.currentPage = 0
    this.numberMembers = numberMembers
  }

  init() {
    this.groupData()
  }

  getCurrentPage() {
    return this.currentPage
  }

  getPreviousPage() {
    return this.currentPage - 1
  }

  getNextPage() {
    return this.currentPage + 1
  }

  getGroupData() {
    return this.dataGroup
  }

  getCurrentPageData(){
    return this.dataGroup[this.currentPage]
  }

  groupData() {
    for (let i = 0; i < this.data.length; i += this.numberMembers) {
      const group = []
      for (let j = i; j < i + this.numberMembers; j++) {
        group.push(this.data[j])
      }
      this.dataGroup.push(group)
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1
    }
  }

  nextPage() {
    if (this.currentPage < this.dataGroup.length - 1) {
      this.currentPage += 1
    }
  }
}
