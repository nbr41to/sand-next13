async function fetchPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return data;
}

const Blog = async () => {
  const posts = await fetchPosts();
  console.log(posts);

  if (!posts) return null;

  return (
    <div>
      <h1 className='text-2xl font-bold'>Blog Page</h1>
      <div className='divide-y'>
        {posts.map((post: any) => (
          <div
            key={post.id}
            className='cursor-pointer py-4 px-2 hover:bg-gray-200'
          >
            <h3 className='text-xl font-bold'>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
