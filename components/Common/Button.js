const InlineToggle = ({disabled, width, rounded, background, border, text, position, padding, children, onClick,shadow }) => {
    const disabledStyle = disabled ? 'opacity-25' : 'opacity-100 cursor-pointer hover:bg-opacity-50';
    const paddingStyle = 'p-' + padding;
    var roundedType;
    if (position == 'start') {
      roundedType = 'rounded-l-' + (rounded ? rounded : 'lg');
    } else if (position == 'end') {
      roundedType = 'rounded-r-' + (rounded ? rounded : 'lg');
    } else {
      roundedType = rounded ? ('rounded-' + rounded) : 'rounded-none';
    }
    return (
      <button
        onClick={()=>{
          onClick();
        }}
        disabled={disabled}
        className={`justify-center  ${width} ${disabledStyle} ${paddingStyle} ${roundedType} ${background} ${border} ${text} ${shadow} focus:outline-none`}>
        {children}
      </button>
    );
  };
  
  export default InlineToggle;
  