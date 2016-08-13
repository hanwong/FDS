
var close_modal = function() {
  removeNode(div_modal);
};

var make_modal = function() {
  var body = document.body;
  var t_node = query('.make');
  insertAfter(div_modal, t_node);  
  //this.setAttribute('disabled', true);
  var btn_x = query('.modal-close');
  btn_x.onclick = close_modal;
};

var modal_class = 'modal';
var modal_title_class = 'modal-title';
var modal_title_content = 'Modal Window';
var modal_desc_class = 'modal-desc';

var html_code = [
  '<div class="' + modal_class +'">',
  '<h2 class="' + modal_title_class +'">' + modal_title_content +'</h2>',
  '<p class="' + modal_desc_class +'">Madal Window Content ...</p>',
  '<button class="modal-cta">send message</button>',
  '<button class="modal-close" aria-label="close modal window">x</button>',
  '</div>'
].join('');

document.body.innerHTML += html_code;



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

btn_modal.onclick = make_modal;




// prependChild(body, deep_clone_p);

