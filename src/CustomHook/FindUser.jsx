import React from "react";
import { useState } from "react";
import GithubFinder from "./GithubFinder";

const FindUser = () => {
  const [userName, SetUserName] = useState("");
  return (
    <div className="find-user">
      <h1 className="text-2xl font-bold">Find User</h1>
      <form name="userName" id="form-field">
        <div className="from-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Enter username..."
            onChange={(event) => SetUserName(event.target.value)}
            className="border border-gray-400 rounded-sm m-3 p-1"
          />
        </div>
      </form>
      <div className="result">
        {userName ? (
          <GithubFinder username={userName} />
        ) : (
          <p>Please , Initiate a Search !!</p>
        )}
      </div>
    </div>
  );
};

export default FindUser;
