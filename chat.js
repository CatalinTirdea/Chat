function send() {
    if (document.querySelector('input').value !== '') {
        div = document.createElement('div');
        div.classList.add('message');
        const val = document.querySelector('input').value;
        document.querySelector('input').value = '';
        div.innerHTML = val;
        document.getElementById('asd').appendChild(div);
        console.log("message sent!");
    }
    else {
        alert("Enter a valid message!");
    }

}