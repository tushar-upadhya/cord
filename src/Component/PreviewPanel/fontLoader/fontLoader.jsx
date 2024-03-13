import React, { useEffect } from "react";

export default function FontLoader(props) {
  useEffect(() => {}, [props.fontList]);

  return <>{props.fontList.length > 0 && <div fonts={props.fontList} />}</>;
}
