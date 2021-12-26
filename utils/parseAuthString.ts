import QueryString from "qs";

const parseAuthString = (path: string) => {
  // Remove unncessary path values
  let str = path.replace("newpass/#", "");

  return QueryString.parse(str);
};

export default parseAuthString;
