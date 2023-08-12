import { useState } from "react";
import usePost from "../hooks/usePost";
import React from "react";

const PostList = () => {
  const pageSize = 5; //untuk menampng berapa isi dalam 1 halaman, bisa pakai state jika ada pilihan brp isinya dlm 1 hlmn
  const { data, fetchNextPage, isLoading, error, isFetching } = usePost({
    pageSize,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div className="d-flex my-3">
        <button
          className="btn btn-primary ms-2"
          onClick={() => fetchNextPage()}
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default PostList;
