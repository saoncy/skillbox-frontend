document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs__btn').forEach(tabsBtn => {
    tabsBtn.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.work__content__item').forEach(item => {
        item.classList.remove('work__content-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
    });
  });
});
