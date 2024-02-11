import _ from 'lodash';
import Swiper from 'swiper';
// import 'swiper/css';
// import './common.less';
// import './swiper.less';
import htmlTemplate from './template.html';

function component() {
  const element = document.createElement('div');
  
  // element.innerHTML = _.join(['Hello', 'webpack'], '★');
  element.innerHTML = htmlTemplate;
  
  return element;
}

document.body.appendChild(component());

const swiper = new Swiper('.swiper', {})