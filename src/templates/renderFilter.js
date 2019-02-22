const renderFilter = (name, count, cb, checked = false) => {
  const div = document.createElement(`div`);
  div.innerHTML = `<input
      type="radio"
      id="filter__${name.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      checked = ${checked}
    />
    <label for="filter__${name.toLowerCase()}" class="filter__label">
      ${name.toUpperCase()} <span class="filter__${name.toLowerCase()}-count">${count}</span>
    </label>`;
  div.addEventListener(`click`, cb);
  return div;
};

export default renderFilter;
