const InlineToggle = ({active, width, rounded, position, children, onClick }) => {
  const activeClassName = active ? 'bg-opacity-75' : 'bg-opacity-0 opacity-50';
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
      className={`${width} ${activeClassName} inline-flex justify-center cursor-pointer border p-1 ${roundedType} bg-blue-400 bg-opacity-10 border-blue-400 hover:bg-opacity-50 text-blue-200 text-xs focus:outline-none`}>
      {children}
    </button>
  );
};

export default InlineToggle;
