const namesList = document.getElementById('namesList');
const ul = document.getElementById('namesList');
const details = document.getElementById('details');
const data = document.getElementById('data');

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

    const curObj = arrSW.map(obj => {
      if (obj.name === ev.target.innerText) {
        console.log(obj)
        const arrObj = Object.keys(obj);
        console.log(arrObj)

        details.innerHTML = arrObj.map(x =>
          `<li>${ x }</li>`
          ).join('')

        const objLoop = () => {
          const dataArr = [];
          for (let key in obj) {
            const sliceKey = obj[key].slice(0, 10);
            dataArr.push(sliceKey);
          }
          return dataArr;
        }
        console.log(objLoop())

        data.innerHTML = objLoop().map(y =>
          `<li>${ y }</li>`
          ).join('');



        //  `<table>
        // ${ obj.name } ${obj.mass} ${obj.hair_color}
        // </table>`
      }
    })

  })
}

getSWData();
