const createMessage = (type) => {
  const template = document.querySelector(`#${type}`);
  const message = template.content.querySelector('.message').cloneNode(true);
  const button = message.querySelector('.message__button');
  document.body.appendChild(message);

  const removeMessage = () => {
    message.remove();
    document.dispatchEvent(new Event('removeMessage'));
  };

  document.addEventListener('click', (event) => {
    if (event.target === message || event.target === button) {
      removeMessage();
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key && event.key.startsWith('Esc')) {
      removeMessage();
    }
  })
};

const renderMessage = (type) => {
  createMessage(type);
};

export {renderMessage};
