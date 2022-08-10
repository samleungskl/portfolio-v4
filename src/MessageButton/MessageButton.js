import './MessageButton.css';

function MessageButton({buttonText, hrefUrl}) {
  return (
    <a className="MessageButton" href={hrefUrl}>
        {buttonText}
    </a>
  );
}

export default MessageButton;
