import React from 'react';

export interface CropIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CropIcon = ({ size, ...props }: CropIconProps) => {
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
        d="M17.7084 15.6248H19.7917V7.2915C19.7917 6.14567 18.8542 5.20817 17.7084 5.20817H9.37508V7.2915H17.7084V15.6248ZM7.29175 17.7082V1.0415H5.20841V5.20817H1.04175V7.2915H5.20841V17.7082C5.20841 18.854 6.14591 19.7915 7.29175 19.7915H17.7084V23.9582H19.7917V19.7915H23.9584V17.7082H7.29175Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CropIcon;
