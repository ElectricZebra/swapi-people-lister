const namesList = document.getElementById('namesList');

const getSWData = async () => {
  const response = await fetch("https://swapi.co/api/people/?format=json");
  const swData = await response.json();

  const arrSW = swData.results.map((x) => {
    return x;
  });

  const renderNames = () => {
    return `
      <ul>
        ${ arrSW.map(obj =>
          `<li> ${ obj.name } </li>`
        ).join('') }
      </ul>
    `
  }
  namesList.innerHTML = renderNames();
}

getSWData();
