import React from 'react';

export interface FavoriteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FavoriteIcon = ({ size, ...props }: FavoriteIconProps) => {
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
        d="M12.4999 22.0573L10.9895 20.6823C5.62492 15.8177 2.08325 12.6094 2.08325 8.67185C2.08325 5.46352 4.60409 2.94269 7.81242 2.94269C9.62492 2.94269 11.3645 3.78644 12.4999 5.11977C13.6353 3.78644 15.3749 2.94269 17.1874 2.94269C20.3958 2.94269 22.9166 5.46352 22.9166 8.67185C22.9166 12.6094 19.3749 15.8177 14.0103 20.6927L12.4999 22.0573Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FavoriteIcon;
