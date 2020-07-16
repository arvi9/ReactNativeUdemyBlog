import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  // const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  const [blogPosts, setBlogPosts] = useState([]);

  //Function to add posts
  const addBlogPost = () => {
    // ... means take all the expisting array and add it to new blog post
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
