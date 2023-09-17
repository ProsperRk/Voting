$(".menu > ul > li").click(function(e) {
    //remove class from already active
    $(this).siblings().removeClass("active");
    // Add active class to clicked
    $(this).toggleClass("active");
    // if has submenu open it
    $(this).find("ul").slideToggle();
    // Close other submenu if open
    $(this).siblings().find("ul").slideUp();
    // Remove active for submenu items
    $(this).siblings().find("ul").removeClass("active");
});

$(".menu-btn").click(function() {
    $("aside").toggleClass("active");
});


//Incrementor
// $(document).ready(function() {
//     $(".card-num").counterUp({
//         delay: 10,
//         time: 1500
//     });
// });



//Chart.js Charts

let data = [12,22,55,70];
let chartLabel = ['Aline', 'Bob', 'Marlye', 'Nicolas'];

let ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartLabel,
        datasets: [{
            label: 'Guild President',
            data: data,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        title: {
            display: true,
            text: 'Voting Tally'
        },
        scles: {
            xAxes: [{
                ticks: {
                    biginAtZero: true
                }
            }]
        }
    }
});

let chart = document.getElementById("mySecChart");
    
const mySecChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['Aline', 'Bob', 'Joe','Chris','John'],
        datasets: [{
            label: 'Vice Guild President',
            data: [12, 22, 55, 12,78],
            backgroundColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)','rgba(255, 99, 132)','rgba(255, 99, 132)'],
            borderColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)','rgba(255, 99, 132, 0.2)','rgba(255, 99, 132, 0.2)'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        title: {
            display: true,
            text: 'Voting Tally'
        },
        scles: {
            xAxes: [{
                ticks: {
                    biginAtZero: true
                }
            }]
        }
    }
});


// PDF Download



