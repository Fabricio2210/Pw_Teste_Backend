const paginationInfo =  (page,limit) =>{
    let  totalResults = 0
    let objPagination = {
        startIndex : (page -1) * limit,
        endIndex : page * limit,
        totalResults,
        nextPage : page + 1,
        previousPage : page - 1,
    }
    return objPagination
} 
module.exports = paginationInfo