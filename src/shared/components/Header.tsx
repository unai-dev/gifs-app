import type { FC } from "react";

interface Props {
  header: string;
  subHeader?: string;
}

export const Header: FC<Props> = ({ header, subHeader }) => {
  return (
    <>
      <div className="content-center">
        <h1>{header}</h1>
        {subHeader && <p>{subHeader}</p>}
      </div>
    </>
  );
};
