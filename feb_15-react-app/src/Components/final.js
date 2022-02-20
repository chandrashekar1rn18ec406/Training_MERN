import React from "react";
import store from "../Store/Store";

const Final = () => {
  return (
    <div>
      <h1>New Voter Deatils</h1>
      <div>
        {store.getState().voterList.map((voter) => (
          <div key={voter.id}>
            <p>Fisrst Name: {voter.fname}</p>
            <p>Last Name : {voter.lname}</p>
            <p>Gender: {voter.gender}</p>
            <p>Age: {voter.age}</p>
            <p>Qualification : {voter.qualification}</p>
            <p>Eligible :{voter.elegible}</p>
            <p> Organization : {voter.organization}</p>
            <button>Back</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Final;
