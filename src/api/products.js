const BASE_URL = 'https://pokhylko.github.io/the-food/data.json';

export const getProducts = () => fetch(BASE_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
