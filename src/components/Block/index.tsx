type LabelType = {
  text: string;
  bgColor: string;
  textColor: string;
};

type BlockProps = {
  label: LabelType;
  className?: string;
};

const Block = ({ label, className }: BlockProps) => {
  return (
    <div
      className={`relative py-2 px-4 font-heading ${label.textColor} uppercase w-max ${className}`}
    >
      {label.text}
      {/* corner blocks */}
      <span className={`absolute top-0 left-1 w-8 h-1 ${label.bgColor}`}></span>
      <span className={`absolute top-1 left-0 w-1 h-2 ${label.bgColor}`}></span>
      <span className={`absolute top-0 right-1 w-8 h-1 ${label.bgColor}`}></span>
      <span className={`absolute top-1 right-0 w-1 h-2 ${label.bgColor}`}></span>
      <span className={`absolute bottom-0 left-1 w-8 h-1 ${label.bgColor}`}></span>
      <span className={`absolute bottom-1 left-0 w-1 h-2 ${label.bgColor}`}></span>
      <span className={`absolute bottom-0 right-1 w-8 h-1 ${label.bgColor}`}></span>
      <span className={`absolute bottom-1 right-0 w-1 h-2 ${label.bgColor}`}></span>
    </div>
  );
};

export default Block;
