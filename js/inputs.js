const form = document.querySelector('.contacto_form');
const inputs = document.querySelectorAll('[type="text"]');

form.addEventListener('click', (event) => {
    const elementInput = (
        event.target.tagName == "INPUT" ? event.target
        : event.target.tagName == "SPAN" ? event.target.previosElementSibling
        : event.target.tagName == "LABEL" ? event.target.firstElementChild
        : event.target.tagname == "DIV" ? event.target.firstElementChild.firstElementChild
        : false
    );
    
    const elementTextArea = (
        event.target.tagName == "TEXTAREA" ? event.target
        : event.target.tagName == "SPAN" ? event.target.previosElementSibling
        : event.target.tagName == "LABEL" ? event.target.firstElementChild
        : event.target.tagname == "DIV" ? event.target.firstElementChild.firstElementChild
        : false
    );

    const elementRef = elementInput || elementTextArea || false;

    if(elementRef) {
        const spanFocus = elementRef.nextElementSibling;
        elementRef.focus();
        spanFocus.classList.add('focus');
    }
})

function handleBlurInput (event) {
    const elementRef = event.target;
    elementRef.blur();
    if(elementRef.value == "") {
        elementRef.nextElementSibling.classList.remove('focus');
    }
}

inputs.forEach(elementRef => {
    elementRef.addEventListener('blur', handleBlurInput);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Formulario enviado")

    const data = [];
    for (let i = 0; i < 3; i++) {
        data[i] = inputs[i].value;
        inputs[i].value = "";
    }
    const response = {nombre : data[0], correo: data[1], mensaje: data[2]}
    
    console.log(response);
})
