import { Pagination } from 'react-bootstrap';

const CustomPagination = ({activePageNo, setActivePageNo, noOfRowsPerPage, setNoOfRowsPerPage, totalCount}) => {
  
  const lastPageNo = Math.ceil(totalCount/noOfRowsPerPage);

  const generatePaginationItems = () => {
    const paginationItems = {};
    for(let index = activePageNo; (index<=Math.abs(lastPageNo-3) && index <= activePageNo+2); index++) {
      paginationItems[index] = (
        <Pagination.Item
          onClick={()=>setActivePageNo(index)}
          active={activePageNo===index ? true : false}
        >{index}</Pagination.Item>
      )
    }
    if(Object.keys(paginationItems).length && Object.keys(paginationItems).length>1) {
      paginationItems[parseInt(Object.keys(paginationItems)[Object.keys(paginationItems).length-1])+1] = (
        <Pagination.Ellipsis />
      )
    } else if((lastPageNo-5)>0) {
      for(let index = lastPageNo-5; index<=lastPageNo-2; index++) {
        paginationItems[index] = (
          <Pagination.Item
            onClick={()=>setActivePageNo(index)}
            active={activePageNo===index ? true : false}
          >{index}</Pagination.Item>
        )
      }
    }
    for(let index = lastPageNo-2; (index > 1 && index <= lastPageNo); index++) {
      if(!Object.keys(paginationItems).includes(index)) {
        paginationItems[index] = (
          <Pagination.Item
            onClick={()=>setActivePageNo(index)}
            active={activePageNo===index ? true : false}
          >{index}</Pagination.Item>
        );
      }
    }
    return Object.values(paginationItems);
  }

  return (
    <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
      <div>
        <label>Rows per page</label>
        <select
          style={{height: 30, width: 50, borderRadius: 4, marginRight: 20, marginLeft: 10, borderColor: "#c0c0c0"}}
          value={noOfRowsPerPage}
          onChange={(e) => setNoOfRowsPerPage(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <Pagination>
        <Pagination.First
          disabled={activePageNo===1 ? true : false}
          onClick={()=>setActivePageNo(1)}
        />
        <Pagination.Prev
          disabled={activePageNo===1 ? true : false}
          onClick={()=>setActivePageNo(activePageNo-1)}
        />
        {
          generatePaginationItems()
        }
        <Pagination.Next
          disabled={activePageNo===lastPageNo ? true : false}
          onClick={()=>setActivePageNo(activePageNo+1)}
        />
        <Pagination.Last
          disabled={activePageNo===lastPageNo ? true : false}
          onClick={()=>setActivePageNo(lastPageNo)}
        />
      </Pagination>
    </div>
  );
}

export default CustomPagination;