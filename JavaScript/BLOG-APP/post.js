(() => {
  function createPostPage() {
    const pageParams = new URLSearchParams(window.location.search);
    document.title += pageParams.get('id');
  }

  window.createPostPage = createPostPage;
})();
