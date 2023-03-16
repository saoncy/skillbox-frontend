(() => {
  function createBlogPostsList() {
    const list = document.createElement('ul');

    list.classList.add('list-group', 'mx-auto', 'pt-5', 'col-6');

    return list;
  }

  function createBlogPostsListItem(blogItem) {
    const link = document.createElement('a');
    const headerWrapper = document.createElement('div');
    const header = document.createElement('h5');
    const author = document.createElement('small');
    const content = document.createElement('p');

    link.classList.add('list-group-item', 'p-3', 'list-group-item-action');
    link.href = '#';
    link.setAttribute('id', blogItem.id);
    headerWrapper.classList.add('w-100', 'd-flex', 'justify-content-between');
    header.classList.add('mb-1', 'col-5', 'text-truncate');
    header.textContent = blogItem.title;
    author.textContent = 'Author';
    content.classList.add('mb-1', 'col-10', 'text-truncate');
    content.textContent = blogItem.body;

    headerWrapper.append(header);
    headerWrapper.append(author);
    link.append(headerWrapper);
    link.append(content);

    return link;
  }

  async function createBlogApp() {
    const app = document.getElementById('blog-app');
    const blogList = createBlogPostsList();

    app.append(blogList);
  }

  window.createBlogApp = createBlogApp;
})();
