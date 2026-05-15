import React from 'react';

export interface FiberManualRecordIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FiberManualRecordIcon = ({ size, ...props }: FiberManualRecordIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5001 20.8333C17.1025 20.8333 20.8334 17.1023 20.8334 12.5C20.8334 7.89759 17.1025 4.16663 12.5001 4.16663C7.89771 4.16663 4.16675 7.89759 4.16675 12.5C4.16675 17.1023 7.89771 20.8333 12.5001 20.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FiberManualRecordIcon;
