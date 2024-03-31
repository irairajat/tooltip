function Tooltip(props) {
  if (props.position == 'top') {
    return (
    <div class="tooltip">Please hover on me
    <span class="tooltip-text top">Thanks for hovering. I am tooltip</span>
    </div>
    );
  }
  else if (props.position == 'left') {
    return (
    <div class="tooltip">Please hover on me
    <span class="tooltip-text left">Thanks for hovering. I am tooltip</span>
    </div>
    );
  }
  else if (props.position == 'right') {
    return (
    <div class="tooltip">Please hover on me
    <span class="tooltip-text right">Thanks for hovering. I am tooltip</span>
    </div>
    );
  }
  else {
    return (
      <div class="tooltip">Please hover on me
      <span class="tooltip-text">Thanks for hovering. I am tooltip</span>
      </div>
    );
  }
}

export default Tooltip;