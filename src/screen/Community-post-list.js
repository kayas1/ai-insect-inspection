import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/community.module.css";
import { Link } from "react-router-dom";
import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable, //
  getPaginationRowModel,
} from "@tanstack/react-table";

function Post() {
  return (
    <div className={styles.postBtnContainer}>
      <Link to={`/community-post-form`}>
        <button className={styles.postBtn}>글 작성</button>
      </Link>
    </div>
  );
}

const defaultData = [
  { id: "1", subject: "sample", createDate: "00:00:00" },
  { id: "2", subject: "sample", createDate: "00:00:00" },
  { id: "3", subject: "sample", createDate: "00:00:00" },
  { id: "4", subject: "sample", createDate: "00:00:00" },
  { id: "5", subject: "sample", createDate: "00:00:00" },
  { id: "6", subject: "sample", createDate: "00:00:00" },
  { id: "7", subject: "sample", createDate: "00:00:00" },
  { id: "8", subject: "sample", createDate: "00:00:00" },
  { id: "9", subject: "sample", createDate: "00:00:00" },
  { id: "10", subject: "sample", createDate: "00:00:00" },
  { id: "11", subject: "sample", createDate: "00:00:00" },
  { id: "12", subject: "sample", createDate: "00:00:00" },
  { id: "13", subject: "sample", createDate: "00:00:00" },
  { id: "14", subject: "sample", createDate: "00:00:00" },
  { id: "15", subject: "sample", createDate: "00:00:00" },
  { id: "16", subject: "sample", createDate: "00:00:00" },
  { id: "17", subject: "sample", createDate: "00:00:00" },
  { id: "18", subject: "sample", createDate: "00:00:00" },
  { id: "19", subject: "sample", createDate: "00:00:00" },
  { id: "20", subject: "sample", createDate: "00:00:00" },
  { id: "21", subject: "sample", createDate: "00:00:00" },
  { id: "22", subject: "sample", createDate: "00:00:00" },
  { id: "23", subject: "sample", createDate: "00:00:00" },
  { id: "24", subject: "sample", createDate: "00:00:00" },
  { id: "25", subject: "sample", createDate: "00:00:00" },
  { id: "26", subject: "sample", createDate: "00:00:00" },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: () => "번호",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("subject", {
    header: () => "제목",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("createDate", {
    header: () => "날짜",
    cell: (info) => info.renderValue(),
  }),
];

function CommunityTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const handleRowClick = (id) => {
    const a = document.createElement("a");
    a.href = `community/${id}`;
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div>
      <table>
        <thead className={styles.tableHeader}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={
                    index === 1 ? styles.titleHeader : styles.noneTitleHeader
                  }
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tableColumn}>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={styles.columnContainer}
              onClick={() => handleRowClick(row.original.id)}
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={
                    index === 1 ? styles.titleColumn : styles.noneTitleColumn
                  }
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pageContainer}>
        <button
          className={styles.pageBtn}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className={styles.pageBtn}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <span>
          <strong>
            {table.getPageCount()}쪽 중{" "}
            {table.getState().pagination.pageIndex + 1}쪽
          </strong>
        </span>
        <button
          className={styles.pageBtn}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className={styles.pageBtn}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm); // 검색어를 부모 컴포넌트로 전달
  };

  return (
    <form className={styles.searchBar}>
      <div className={styles.searchBargrid1}>
        <label htmlFor="keyword"> 검색어: </label>
        <input
          id="keyword"
          name="keyword"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div className={styles.searchBargrid2}>
        <label htmlFor="searchOption">검색 옵션: </label>
        <select id="searchOption" name="searchOption">
          <option value="title">제목</option>
          <option value="titleAndContent">제목과 내용</option>
        </select>
      </div>
      <div className={styles.searchBargrid3}>
        <button onClick={handleSearchClick}>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </form>
  );
}
function CommunityScreen() {
  const data = [
    { id: 1, num: 1, title: "제목 1", createDate: "2023-11-10" },
    { id: 2, num: 2, title: "제목 2", createDate: "2023-11-09" },
    { id: 3, num: 3, title: "제목 3", createDate: "2023-11-08" },
  ];

  const columns = [
    { Header: "번호", accessor: "num" },
    { Header: "제목", accessor: "title" },
    { Header: "작성일", accessor: "createDate" },
  ];

  const handleSearch = (searchTerm) => {
    // 여기에서 검색어에 따라 데이터를 필터링하거나 검색 기능 구현
    // 필터링된 데이터를 사용하여 커뮤니티 테이블을 업데이트할 수 있습니다.
    // 예: setData(filteredData);
    console.log("검색어:", searchTerm);
  };
  return (
    <div>
      <Header title="커뮤니티" />
      <div className={styles.communityContainer}>
        <Post />
        <SearchBar handleSearch={handleSearch} /> {/* 검색 창 추가 */}
        <CommunityTable data={data} columns={columns} />
      </div>
      <Footer />
    </div>
  );
}

export default CommunityScreen;
