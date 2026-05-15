import React from 'react';

export interface ArrowForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowForwardIcon = ({ size, ...props }: ArrowForwardIconProps) => {
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
        d="M12.5001 4.1665L11.0313 5.63525L16.8438 11.4582H4.16675V13.5415H16.8438L11.0313 19.3644L12.5001 20.8332L20.8334 12.4998L12.5001 4.1665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowForwardIcon;
