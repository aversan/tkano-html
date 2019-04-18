// import $ from 'jquery';
import 'jquery-mask-plugin/src/jquery.mask.js';

export default class PhoneNumberMask {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      $(this).mask('+7 000 000-00-00', {placeholder: "+7 xxx xxx-xx-xx"});
    });
  }
}
