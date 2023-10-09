let ctx = document.getElementById('chart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july'],
    datasets: [
      {
        label: 'My first dataset',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  options: {},
});
