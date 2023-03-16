(() => {
  async function createBlogPostPage(id) {
    const post = document.createElement("div");
    const postBody = document.createElement("div");
    const postTitle = document.createElement("h1");
    const postText = document.createElement("p");
    const postLinkBack = document.createElement("a");
    const postObject = await getBlogPostById(id);

    post.classList.add("card", "mx-auto", "col-6");
    postBody.classList.add("card-body");
    postTitle.classList.add("card-title");
    postText.classList.add("card-text");
    postLinkBack.classList.add("card-link");

    postTitle.textContent = postObject.title;
    postText.textContent = postObject.body;
    postLinkBack.textContent = "Return to the beginning";
    postLinkBack.href = "index.html";

    postBody.append(postTitle);
    postBody.append(postText);
    postBody.append(postLinkBack);
    post.append(postBody);

    return post;
  }

  function createCommentsListElement(commentObj) {
    const comment = document.createElement("div");
    const commentBody = document.createElement("div");
    const commentTitle = document.createElement("h2");
    const commentText = document.createElement("p");

    comment.classList.add("card", "mt-2");
    commentBody.classList.add("card-body");
    commentTitle.classList.add("card-title");
    commentText.classList.add("card-text");

    commentTitle.textContent = commentObj.name;
    commentText.textContent = commentObj.body;

    commentBody.append(commentTitle);
    commentBody.append(commentText);
    comment.append(commentBody);

    return comment;
  }

  function createCommentsList() {
    const commentSection = document.createElement("div");
    const title = document.createElement("h1");

    commentSection.classList.add("mx-auto", "col-6", "mt-3");
    commentSection.setAttribute("id", "comments-section");
    title.textContent = "Comments";

    commentSection.append(title);

    return commentSection;
  }

  async function addCommentsToPage(postID) {
    const container = document.getElementById("comments-section");
    const comments = await getBlogPostCommentsById(postID);
    console.log(comments);

    if (comments.length) {
      comments.forEach((el) => {
        container.append(createCommentsListElement(el));
      });
    } else {
      const msg = document.createElement("p");

      msg.classList.add("text-info", "fs-5");
      msg.textContent = "No comments";

      container.append(msg);
    }
  }

  async function createPostPage() {
    const container = document.getElementById("blog-post");
    const pageParams = new URLSearchParams(window.location.search);
    const commentSection = createCommentsList();

    document.title += pageParams.get("id");
    container.append(await createBlogPostPage(pageParams.get("id")));
    container.append(commentSection);

    addCommentsToPage(pageParams.get("id"));
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

  async function getBlogPostCommentsById(id) {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`,
      {
        mode: "cors",
        headers: {
          Authorization: "Bearer *insert your key here*",
        },
      }
    );
    const blogComments = await response.json();

    return blogComments;
  }

  window.createPostPage = createPostPage;
})();
