import chartXkcd from 'chart.xkcd';

/**
 * draw star history graph based on data
 * @param {String} datasets example [{label:'tj/koa', data:[{x:'2016-6-12', y:12}, ...]}, ...]
 */
export default function draw(datasets) {
  const svg = document.querySelector('#chart svg');
  new chartXkcd.XY(svg, {
    title: 'Star history',
    yLabel: 'Github stars',
    xLabel: 'Date',
    data: {
      datasets
    },    
    options: {
      xTickCount: 5,
      yTickCount: 5,
      legendPosition: chartXkcd.config.positionType.upLeft,
      showLine: true,
      timeFormat: 'MM/DD/YYYY',
      dotSize: 0.5,
      unxkcdify: true,
      fontFamily: 'Arial',
    },
  })
}