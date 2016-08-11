var div_modal = document.createElement('div');
div_modal.setAttribute('class', 'modal');

var h2_title = set_element('h2', 'Modal Window');
h2_title.setAttribute('class', 'modal-title');

var p_desc = set_element('p', 'Madal Window Content ...');
p_desc.setAttribute('class', 'modal-desc');

var btn_cta = set_element('button', 'send message');
btn_cta.setAttribute('class', 'modal-cta');

var btn_close = set_element('button', 'x');
btn_close.setAttribute('class', 'modal-close');
btn_close.setAttribute('aria-label', 'close modal window');

div_modal.appendChild(h2_title);
div_modal.appendChild(p_desc);
div_modal.appendChild(btn_cta);
div_modal.appendChild(btn_close);

var btn_modal = query('.make');

var make_modal = function() {
  var body = document.body;
  var t_node = query('.make');
  insertAfter(div_modal, t_node);  
  //this.setAttribute('disabled', true);
  var btn_x = query('.modal-close');
  btn_x.onclick = close_modal;
};
btn_modal.onclick = make_modal;


var close_modal = function() {
  div_modal.parentNode.removeChild(div_modal);
};

var res = square(5); // TypeError: square is not a function

var square = function(number) {
  return number * number;
}