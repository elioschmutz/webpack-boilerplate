import './app.scss';
import './index.html';
import { Car } from './car';

function component () {
  var element = document.createElement('div');
  var car = new Car();

  var calculate = (x, y) => {
      return x + y;
  };
  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Car is starting: ', car.start(), calculate(10, 30)], ' ');

  return element;
}

document.body.appendChild(component());
