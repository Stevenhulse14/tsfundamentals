import React, { FC } from "react";

interface Props {
  name: string;
  age: number;
}

const page: FC<Props> = () => {
  return <div>dashboard</div>;
};

export default page;
