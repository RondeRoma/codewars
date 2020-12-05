const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilteredChange, 300));

const listItemsMarkUp = createListItemMarkUp(tech);

populateList(listItemsMarkUp);

function createListItemMarkUp(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilteredChange(e) {
  const filter = e.target.value.toLowerCase();
  const filteredItems = tech.filter((el) =>
    el.label.toLowerCase().includes(filter)
  );
  
  const listItemsMarkUp = createListItemMarkUp(filteredItems);
  populateList(listItemsMarkUp);
}

function populateList(markUp) {
    refs.list.innerHTML = markUp;
}