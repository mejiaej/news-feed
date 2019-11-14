const DEFAULT_GET_CONFIG = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

const getPosts = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, DEFAULT_GET_CONFIG);

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const getComments = async ({ postId }) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    const response = await fetch(url, DEFAULT_GET_CONFIG);

    const comments = await response.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
};

export { getPosts, getComments };
