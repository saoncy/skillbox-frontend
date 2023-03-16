(() => {
  function createBlogPostsList() {
    const list = document.createElement('div');

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

  function createPaginationButtonGroup(prev, next) {
    const pagination = document.createElement('ul');
    const prevButton = createPaginationButton(prev, 'Previous');
    const nextButton = createPaginationButton(next, 'Next');

    pagination.classList.add('pagination', 'mt-2', 'justify-content-center');

    pagination.append(prevButton);
    pagination.append(nextButton);

    return pagination;
  }

  function createPaginationButton(link, text) {
    const buttonWrapper = document.createElement('li');
    const pageLink = document.createElement('a');

    buttonWrapper.classList.add('page-item', 'col-3', 'text-center');
    pageLink.classList.add('page-link');
    pageLink.href = link;
    pageLink.textContent = `${text} page`;

    buttonWrapper.append(pageLink);

    return buttonWrapper;
  }

  async function createBlogApp() {
    const app = document.getElementById('blog-app');
    const blogList = createBlogPostsList();
    const pagination = createPaginationButtonGroup('#', '#');

    app.append(blogList);
    app.append(pagination);
  }

  window.createBlogApp = createBlogApp;
})();
