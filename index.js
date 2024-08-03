console.log("Hello World!");

// Current date for title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// dateElement.innerHTML = currentDate;

let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd4921beb9amsh547da79d8b1fdb4p1cd19fjsnf45fce634508',
        'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
    },
    body: new URLSearchParams({woeid: '23424934'})
};

// =========================
// dummy data to comment out
// =========================

// let myPost = {
//  name: "Lee Sung Kyung",
//  queryUrl: "search?q=%22Lee+Sung+Kyung%22",
//  volume: 31799
// }

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);

// let graphData = [
//  {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//  {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ];

// console.log(graphData);
// // Arrays use "index" as the indicator for the position of the "element" in a list.
// // Arrays start at 0 index for the first item, 1 for the second item and 2 for the 3rd item
// console.log(graphData[1]);

// // Since the first element/item in the array is an object, we can use dot notation to access it's properties
// console.log(graphData[1].name);
// console.log(graphData);

// // We can also add elements to arrays using the array method push.
// graphData.push(myPost);
// console.log(graphData);

// ================================
// end of dummy data to comment out
// ================================

let graphData = [];

fetch(url, options)
.then(res => res.json())
.then(data => {
    
    console.log(data);

    console.log(graphData.length);

    // For loops are used do repetitive tasks, in this case to print out each individual element in the graphData array and their respective properties
    // Uses the condition "< 25" to ensure the graph renders properly.
    // Using all 50 topics retrieved in the API does not render the graph properly and could lead to unexpected results and visual glitches of missing labels.
    for (let i = 0; i < 25; i++) {
        graphData.push(
            {
                "name": data.trends[i].name,
                "volume": data.trends[i].volume
            }
        )
    }

    // This is used to grab all the names and put them into an array for use in our graph
    // The map method is used to loop through all elements/items of an array and execute some code
    let topics = graphData.map(object => {
        console.log(object);
        console.log(object.name);
        return object.name
    })

    console.log(topics);

    // This is used to grab all the names and put them into an array for use in our graph
    let volumes = graphData.map(object => {
        return object.volume
    })

    console.log(volumes);

    const myChart = document.getElementById('myChart');

    let barChart = new Chart(myChart, {
        type: 'bar',
        data: {
          labels: topics,
          datasets: [{
            label: '# of tweets/xeets',
            data: volumes,
            borderWidth: 2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            hoverBackgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ]
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });

});

// ===========================
// copy paste to fetch request
// ===========================

// console.log(graphData.length);

// // For loops are used do repetitive tasks, in this case to print out each individual element in the graphData array and their respective properties
// for (let i = 0; i < 2; i++) {
//  console.log(graphData[i]);
//  console.log(graphData[i].name);
//  console.log(graphData[i].queryUrl);
//  console.log(graphData[i].volume);
// }

// // This is used to grab all the names and put them into an array for use in our graph
// // The map method is used to loop through all elements/items of an array and execute some code
// let topics = graphData.map(object => {
//  console.log(object);
//  console.log(object.name);
//  return object.name
// })

// console.log(topics);

// // This is used to grab all the names and put them into an array for use in our graph
// let volumes = graphData.map(object => {
//  return object.volume
// })

// console.log(volumes);

// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//  type: 'bar',
//  data: {
//    labels: topics,
//    datasets: [{
//      label: '# of Votes',
//      data: volumes,
//      borderWidth: 2,
//         backgroundColor: [
//          'rgba(255, 99, 132, 0.2)',
//          'rgba(255, 159, 64, 0.2)',
//          'rgba(255, 205, 86, 0.2)',
//          'rgba(75, 192, 192, 0.2)',
//          'rgba(54, 162, 235, 0.2)',
//          'rgba(153, 102, 255, 0.2)',
//          'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//          'rgb(255, 99, 132)',
//          'rgb(255, 159, 64)',
//          'rgb(255, 205, 86)',
//          'rgb(75, 192, 192)',
//          'rgb(54, 162, 235)',
//          'rgb(153, 102, 255)',
//          'rgb(201, 203, 207)'
//         ],
//         hoverBackgroundColor: [
//          'rgb(255, 99, 132)',
//          'rgb(255, 159, 64)',
//          'rgb(255, 205, 86)',
//          'rgb(75, 192, 192)',
//          'rgb(54, 162, 235)',
//          'rgb(153, 102, 255)',
//          'rgb(201, 203, 207)'
//         ]
//    }]
//  },
//  options: {
//    indexAxis: 'y',
//    scales: {
//      y: {
//        beginAtZero: true
//      }
//    }
//  }
// });

// ==================================
// end of copy paste to fetch request
// ==================================