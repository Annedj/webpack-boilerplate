import Sortable from 'sortablejs';

const initSortable = () => {
  const options = {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      console.log(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  };
  const list = document.querySelector('#results');
  Sortable.create(list, options);
};

export { initSortable };
