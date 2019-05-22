const namesList = document.getElementById('namesList');
const ul = document.getElementById('namesList');
const details = document.getElementById('details');
const data = document.getElementById('data');

const dataObj = {
  peopleArr: []
}

const getSWData = async () => {
  const response = await fetch("https://swapi.co/api/people/?format=json");
  const swData = await response.json();

  dataObj.peopleArr = swData.results/* .map((x) => {
    return x;
  });
  console.log(arrSW); */
}

const render = async () => {
  await getSWData();
  console.log(dataObj.peopleArr)
  namesList.innerHTML = renderNames(dataObj.peopleArr);

}

const renderNames = (data) => {
  return `
    <ul id='namesList'>
      ${ data.map(obj =>
    `<li> ${obj.name} </li>`
  ).join('')}
    </ul>
  `
}

namesList.addEventListener('click', (ev) => {
  dataObj.peopleArr.map(obj => {
    if (obj.name === ev.target.innerText) {
      const arrObj = Object.keys(obj);

      const objLoop = () => {
        const dataArr = [];
        for (let key in obj) {
          dataArr.push(obj[key]);}
        return dataArr;
      }

      details.innerHTML = arrObj.map(x =>
        `<li>${ x }</li>`
        ).join('')

      data.innerHTML = objLoop().map(y => {
        console.log(y);
        if(!y.length) return `<li>(no data)</li>`
        else return `<li>${ y }</li>`
      }).join('');
    }
  })
})

render();
// getSWData();
