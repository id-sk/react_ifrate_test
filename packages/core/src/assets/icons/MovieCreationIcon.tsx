import React from 'react';

export interface MovieCreationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MovieCreationIcon = ({ size, ...props }: MovieCreationIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M18.7499 4.1665L20.8333 8.33317H17.7083L15.6249 4.1665H13.5416L15.6249 8.33317H12.4999L10.4166 4.1665H8.33325L10.4166 8.33317H7.29159L5.20825 4.1665H4.16659C3.02075 4.1665 2.09367 5.104 2.09367 6.24984L2.08325 18.7498C2.08325 19.8957 3.02075 20.8332 4.16659 20.8332H20.8333C21.9791 20.8332 22.9166 19.8957 22.9166 18.7498V4.1665H18.7499Z" fill="currentColor"/>
    </svg>
  );
};

export default MovieCreationIcon;
