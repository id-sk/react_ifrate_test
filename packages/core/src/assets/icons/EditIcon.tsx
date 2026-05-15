import React from 'react';

export interface EditIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditIcon = ({ size, ...props }: EditIconProps) => {
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
        d="M3.12378 17.9699V21.8761H7.03003L18.5509 10.3553L14.6446 6.44906L3.12378 17.9699ZM21.5717 7.33447C21.9779 6.92822 21.9779 6.27197 21.5717 5.86572L19.1342 3.42822C18.7279 3.02197 18.0717 3.02197 17.6654 3.42822L15.7592 5.33447L19.6654 9.24072L21.5717 7.33447Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EditIcon;
