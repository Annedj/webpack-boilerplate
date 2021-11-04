import select2 from 'select2';
import $ from 'jquery';

const initSelect2 = () => {
  const options = { width: '300px' };
  $('.select-states').select2(options);
};

export { initSelect2 };
