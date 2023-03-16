(() => {
  function createBlogPostsList() {
    const list = document.createElement("div");

    list.classList.add("list-group", "mx-auto", "pt-5", "col-6");

    return list;
  }

  async function createBlogPostsListItem(blogItem) {
    const link = document.createElement("a");
    const headerWrapper = document.createElement("div");
    const header = document.createElement("h5");
    const author = document.createElement("small");
    const content = document.createElement("p");

    link.classList.add("list-group-item", "p-3", "list-group-item-action");
    link.href = "#";
    link.setAttribute("id", blogItem.id);
    headerWrapper.classList.add("w-100", "d-flex", "justify-content-between");
    header.classList.add("mb-1", "col-5", "text-truncate");
    header.textContent = blogItem.title;
    author.textContent = await getBlogPostAuthorName(blogItem["user_id"]);
    content.classList.add("mb-1", "col-10", "text-truncate");
    content.textContent = blogItem.body;

    headerWrapper.append(header);
    headerWrapper.append(author);
    link.append(headerWrapper);
    link.append(content);

    return link;
  }

  function createPaginationButtonGroup(prev, next) {
    const pagination = document.createElement("ul");
    const prevButton = createPaginationButton(prev, "Previous");
    const nextButton = createPaginationButton(next, "Next");

    pagination.classList.add("pagination", "mt-2", "justify-content-center");

    pagination.append(prevButton);
    pagination.append(nextButton);

    return pagination;
  }

  function createPaginationButton(link, text) {
    const buttonWrapper = document.createElement("li");
    const pageLink = document.createElement("a");

    buttonWrapper.classList.add("page-item", "col-3", "text-center");
    pageLink.classList.add("page-link");
    pageLink.href = `index.html?page=${link}`;
    pageLink.textContent = `${text} page`;

    buttonWrapper.append(pageLink);

    return buttonWrapper;
  }

  async function createBlogApp() {
    const app = document.getElementById("blog-app");
    const blogList = createBlogPostsList();
    const pageParams = new URLSearchParams(window.location.search);
    const pageNumber = pageParams.get("page")
      ? parseInt(pageParams.get("page"))
      : 1;
    const posts = await getBlogPostsList(pageNumber);
    const pagination = createPaginationButtonGroup(
      pageNumber <= 1 ? 1 : pageNumber - 1,
      pageNumber + 1
    );

    posts.forEach(async (post) => {
      const blogListItem = await createBlogPostsListItem(post);
      blogList.append(blogListItem);
    });

    app.append(blogList);
    app.append(pagination);
  }

  async function getBlogPostAuthorName(authorID) {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${authorID}`,
      {
        mode: "cors",
        headers: {
          Authorization:
            "Bearer *insert your key here*",
        },
      }
    );
    if (!response.ok) return "Anonymous";

    const authorObject = await response.json();

    return authorObject.name;
  }

  async function getBlogPostsList(page) {
    if (!page || page < 0) page = 1;
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts?page=${page}`,
      {
        mode: "cors",
        headers: {
          Authorization:
            "Bearer *insert your key here*",
        },
      }
    );
    const postsList = await response.json();

    return postsList;
  }

  window.createBlogApp = createBlogApp;
})();
