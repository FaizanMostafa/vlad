import { Pagination } from 'react-bootstrap';

const CustomPagination = ({activePageNo, setActivePageNo, noOfRowsPerPage, setNoOfRowsPerPage, totalCount}) => {
  
  const lastPageNo = Math.ceil(totalCount/noOfRowsPerPage);

  const generatePaginationItems = () => {
    const paginationItems = [];
    for(let index = 1; index <= lastPageNo; index++) {
      paginationItems.push(
        <Pagination.Item
          onClick={()=>setActivePageNo(1)}
          active={activePageNo===1 ? true : false}
        >{1}</Pagination.Item>
      )
    }
    return paginationItems;
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
          lastPageNo<=6
            ?
              generatePaginationItems()
            :
              <>
              </>
        }
        {/* <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
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