const createMessage = (type) => {
  const template = document.querySelector(`#${type}`);
  const message = template.content.querySelector('.message').cloneNode(true);
  const button = message.querySelector('.message__button');
  document.body.appendChild(message);

  document.addEventListener('click', (event) => {
    if (event.target === message || event.target === button) {
      message.remove();
      document.dispatchEvent(new Event('removeMessage'));
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Esc')) {
      message.remove();
      document.dispatchEvent(new Event('removeMessage'));
    }
  })
};

const renderMessage = (type) => {
  createMessage(type);
};

export {renderMessage};
