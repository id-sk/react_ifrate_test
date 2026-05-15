import React from 'react';

export interface FavoriteBorderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FavoriteBorderIcon = ({ size, ...props }: FavoriteBorderIconProps) => {
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
        d="M17.1874 2.94269C15.3749 2.94269 13.6353 3.78644 12.4999 5.11977C11.3645 3.78644 9.62492 2.94269 7.81242 2.94269C4.60409 2.94269 2.08325 5.46352 2.08325 8.67185C2.08325 12.6094 5.62492 15.8177 10.9895 20.6927L12.4999 22.0573L14.0103 20.6823C19.3749 15.8177 22.9166 12.6094 22.9166 8.67185C22.9166 5.46352 20.3958 2.94269 17.1874 2.94269ZM12.6041 19.1406L12.4999 19.2448L12.3958 19.1406C7.43742 14.651 4.16659 11.6823 4.16659 8.67185C4.16659 6.58852 5.72909 5.02602 7.81242 5.02602C9.41659 5.02602 10.9791 6.05727 11.5312 7.48435H13.4791C14.0208 6.05727 15.5833 5.02602 17.1874 5.02602C19.2708 5.02602 20.8333 6.58852 20.8333 8.67185C20.8333 11.6823 17.5624 14.651 12.6041 19.1406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FavoriteBorderIcon;
