// function myfunction(){
// var name = document.getElementById('name');
// document.getElementById('print').innerHTML = name;
// var number = document.getElementById('number');


// name.push();
// number.push();
// document.getElementById("print").innerHTML = name;
// }




// let x = 0;
// const array = Array();

// function myfunction()
// {
//  array[x] = document.getElementById("name").value;
// //  console.log(array[x]);
// //  alert(`Element: ${array[x]} Added at index ${x}`);
//  x++;
//  document.getElementById("name").value = "";

// }


const longname = [];
const longnumber = [];

function malfunction() {
 
    let namearr = document.getElementById('name').value;
    let numberarr = document.getElementById('number').value;
  longname.push({namearr});
  longnumber.push({numberarr});

    console.log(longname);
    console.log(longnumber);

    const mapname = longname.map((names) => {
      console.log(names);
      // document.getElementById('printnames').innerHTML = names;
    });
    const mapnumber = longnumber.map((numbers) => {
      console.log(numbers);
      // document.getElementById('printnumber').innerHTML = mapnumber;
    });
    // let mapnumber = longnumber.map(numberarr);

    // const  = array1.map(x => x * 2);
//   const mapname =  details.map(x  );
// //   const mapnumber = details.map(numberarr);
// document.getElementById('printname').innerHTML =`${mapname}`;
//     document.getElementById('printnumber').innerHTML = `${mapnumber}`;

    $('#myform')[0].reset();
    return false;
}