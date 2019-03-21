import React from "react";

const getDate = longDate => {
  let date = new Date(longDate);
  return (
    date.getUTCMonth() + 1 + "/" + date.getUTCDate() + "/" + date.getFullYear()
  );
};

export default React.memo(getDate);
