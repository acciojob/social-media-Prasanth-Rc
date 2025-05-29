export const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

export let posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is my first post!',
    author: 1,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'Hello world!',
    author: 2,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
];

export let notifications = [
  'New message from John',
  'Jane liked your post',
  'Bob commented on your photo'
];

export const addPost = (post) => {
  const newPost = {
    ...post,
    id: posts.length + 1,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  };
  posts = [...posts, newPost];
  return newPost;
};

export const updatePost = (updatedPost) => {
  posts = posts.map(post => 
    post.id === updatedPost.id ? updatedPost : post
  );
};