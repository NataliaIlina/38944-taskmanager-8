import { FILTER_NAMES } from './constants';
import { getRandomNumber } from './utils';
import renderFilter from './templates/renderFilter';
import renderCard from './templates/renderCard';

const filtersWrapper = document.querySelector('.main__filter');
const boardElement = document.querySelector('.board__tasks');

const onFilterClick = () => {
  boardElement.innerHTML = '';
  boardElement.appendChild(renderAllCards(getRandomNumber(1, 7)));
};

const renderAllFilters = names => {
  const fragment = document.createDocumentFragment();
  names.forEach(name =>
    fragment.appendChild(
      renderFilter(name, getRandomNumber(1, 20), onFilterClick),
    ),
  );
  return fragment;
};

const renderAllCards = count => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    fragment.appendChild(
      renderCard('pink', 'repeat', 'Еще одна карточка с задачей'),
    );
  }
  return fragment;
};

filtersWrapper.appendChild(renderAllFilters(FILTER_NAMES));
boardElement.appendChild(renderAllCards(7));
