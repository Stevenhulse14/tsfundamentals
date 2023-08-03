import React from "react";
import Parent from "@components/childrenParent/Parent";
import Child from "@components/childrenParent/Child";
import SecondChild from "@components/childrenParent/SecondChild";

const pages = () => {
  return (
    <div>
      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};

export default pages;
