import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      console.log(state);
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};
export const BlogProvider = ({ children }) => {
  // const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  // const [blogPosts, setBlogPosts] = useState([]);
  //setBlogPosts is Dispatch -- Is used to change state
  //blogPosts is State
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
