import QueryString from 'qs';

const parseAuthString = (path: string): QueryString.ParsedQs => {
  // Remove unncessary path values
  const str = path.replace('newpass/#', '');

  return QueryString.parse(str);
};

export default parseAuthString;
