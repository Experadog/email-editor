import { memo } from "react";
import { IDetails } from "./types";

interface Props {
  details: IDetails;
	handleLoading: () => void
}

function initialDetails({ details, handleLoading }: Props) {
  return (
    <>
      <h1>{details.title}</h1>
      <div>{details.description}</div>
      <button onClick={handleLoading}>{details.button}</button>
    </>
  );
}

export const Details = memo(initialDetails);
