(() => {
  async function createBlogPostPage(id) {
    const post = document.createElement("div");
    const postBody = document.createElement("div");
    const postTitle = document.createElement("h1");
    const postText = document.createElement("p");
    const postObject = await getBlogPostById(id);

    post.classList.add("card", "mx-auto", "col-6");
    postBody.classList.add("card-body");
    postTitle.classList.add("card-title");
    postText.classList.add("card-text");

    postTitle.textContent = postObject.title;
    postText.textContent = postObject.body;

    postBody.append(postTitle);
    postBody.append(postText);
    post.append(postBody);

    return post;
  }

  async function createPostPage() {
    const container = document.getElementById("blog-post");
    const pageParams = new URLSearchParams(window.location.search);

    document.title += pageParams.get("id");
    container.append(await createBlogPostPage(pageParams.get("id")));
  }

  async function getBlogPostById(id) {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
      mode: "cors",
      headers: {
        Authorization: "Bearer *insert your key here*",
      },
    });
    const blogPost = await response.json();

    return blogPost;
  }

  window.createPostPage = createPostPage;
})();
