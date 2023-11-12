import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/community.module.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { usePagination, useTable } from "react-table";

function Post() {
  return (
    <div className={styles.postBtnContainer}>
      <Link to={`/community-post-form`}>
        <button className={styles.postBtn}>글 작성</button>
      </Link>
    </div>
  );
}

function CommunityTable({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td>
                  <Link to={`/community/${row.original.id}`}>상세 보기</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          이전 페이지
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          다음 페이지
        </button>{" "}
        <span>
          현재 페이지{" "}
          <strong>
            {pageIndex + 1} of {page.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
}

function CommunityScreen() {
  const data = [
    { id: 1, num: 1, title: "제목 1", createdAt: "2023-11-10" },
    { id: 2, num: 2, title: "제목 2", createdAt: "2023-11-09" },
    { id: 3, num: 3, title: "제목 3", createdAt: "2023-11-08" },
  ];

  const columns = [
    { Header: "번호", accessor: "num" },
    { Header: "제목", accessor: "title" },
    { Header: "작성일", accessor: "createdAt" },
  ];
  return (
    <div>
      <Header title="커뮤니티" />
      <Post />
      <CommunityTable data={data} columns={columns} />
      <Footer />
    </div>
  );
}

export default CommunityScreen;
