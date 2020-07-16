import React, { Children } from "react";

const BlogContext = React.createContext();

export const BlogProvider = (childern) => {
  return <BlogContext.Provider value={5}>{childern}</BlogContext.Provider>;
};

export default BlogContext;
