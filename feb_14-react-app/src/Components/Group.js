import React from "react";

const Group = () => {
  return (
    <div>
      <div>
        <form action="">
          <h1>Group Details</h1>
          <label htmlFor="">
            Group Name: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Group Details: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Create Group Date: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            How many member allowed: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Group;
