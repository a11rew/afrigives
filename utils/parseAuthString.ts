import QueryString from "qs";

const parseAuthString = (path: string) => {
  // Remove unncessary path values
  let str = path.replace("newpass/#", "");

  console.log("qs parsed", QueryString.parse(str));
  return QueryString.parse(str);
};

export default parseAuthString;
