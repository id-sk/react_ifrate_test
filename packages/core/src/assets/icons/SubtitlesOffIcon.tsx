import React from 'react';

export interface SubtitlesOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SubtitlesOffIcon = ({ size, ...props }: SubtitlesOffIconProps) => {
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
        d="M21.3333 3.43233H7.6145L15.9478 11.7657H21.3333V13.849H18.0312L23.1666 18.9844C23.3228 18.6927 23.4166 18.3698 23.4166 18.0157V5.51567C23.4166 4.36983 22.4791 3.43233 21.3333 3.43233Z"
        fill="currentColor"
      />
      <path
        d="M1.58325 3.29692L2.83325 4.54692C2.677 4.83858 2.58325 5.1615 2.58325 5.51567V18.0157C2.58325 19.1615 3.52075 20.099 4.66659 20.099H18.3853L21.4687 23.1823L22.9374 21.7136L3.052 1.81775L1.58325 3.29692ZM8.83325 11.7657V13.849H4.66659V11.7657H8.83325ZM15.0833 16.7969V18.0157H4.66659V15.9323H14.2187L15.0833 16.7969Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SubtitlesOffIcon;
