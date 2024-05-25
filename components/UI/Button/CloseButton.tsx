type CloseButtonType = {
  onClick: () => void;
};
const CloseButton = ({ onClick }: CloseButtonType) => {
  return (
    <div
      className="close-container relative w-9 h-9 cursor-pointer"
      onClick={onClick}
    >
      <div className="leftright top-0 left-0 h-0.5 w-7.5 bg-black dark:bg-white transform transition-all duration-300 ease-in"></div>
      <div className="rightleft top-0 left-0 h-0.5 w-7.5 bg-black dark:bg-white transform transition-all duration-300 ease-in"></div>
    </div>
  );
};

export default CloseButton;
