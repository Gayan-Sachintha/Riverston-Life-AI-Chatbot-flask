class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
        }
        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatbox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatbox))
        sendButton.addEventListener('click', () => this.onSendButton(chatbox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatbox);
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;
        if (this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {

        var textField = chatbox.querySelector('input');
        let text1 = textField.value;
        if (text1 === '') {
            return;
        }

        let msg1 = {name: "User", message: text1 }
        this.messages.push(msg1);

        fetch ('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let  msg2 = {name: "Gayan", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''
        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
        });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().forEach(function(item,){
            if(item.name === "Gayan")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            }else 
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();