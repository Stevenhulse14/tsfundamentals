import React, { ReactNode as RN } from "react";

interface Child {
  children: RN;
}
const Parent = ({ children }: Child) => {
  return (
    <div>
      <h1>This is the parent and her </h1>
      {children}
    </div>
  );
};

export default Parent;
