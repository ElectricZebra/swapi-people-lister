const namesList = document.getElementById('namesList');
const ul = document.getElementById('namesList');
const details = document.getElementById('details');

const getSWData = async () => {
  const response = await fetch("https://swapi.co/api/people/?format=json");
  const swData = await response.json();

  const arrSW = swData.results.map((x) => {
    return x;
  });
  console.log(arrSW);


  const renderNames = () => {
    return `
      <ul id='namesList'>
        ${ arrSW.map(obj =>
      `<li> ${obj.name} </li>`
    ).join('')}
      </ul>
    `
  }
  namesList.innerHTML = renderNames();



  namesList.addEventListener('click', (ev) => {
    // console.dir(ev.target)
    // const curObj = ;
    const curObj = arrSW.map(obj => {
      if (obj.name === ev.target.innerText) {
        console.log(obj)
        details.innerHTML = `${obj.mass} ${obj.hair_color}`
      }
    })
    // details.innerHTML = curObj
    // console.dir(curObj)
  })
}

getSWData();
