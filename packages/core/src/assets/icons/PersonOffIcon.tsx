import React from 'react';

export interface PersonOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonOffIcon = ({ size, ...props }: PersonOffIconProps) => {
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
        d="M9.75 5.32292C10.4896 4.17708 11.7812 3.42708 13.2396 3.42708C15.5417 3.42708 17.4063 5.29167 17.4063 7.59375C17.4063 9.05208 16.6563 10.3438 15.5104 11.0833L9.75 5.32292ZM21.5729 17.1458C21.5521 16 20.9167 14.9479 19.8958 14.4167C19.3333 14.125 18.7188 13.8542 18.0521 13.625L21.5729 17.1458ZM22.8125 21.3333L3.66667 2.1875L2.1875 3.65625L11.4479 12.9167C9.5625 13.1562 7.91667 13.7396 6.58333 14.4271C5.54167 14.9583 4.90625 16.0313 4.90625 17.1979V20.0938H18.625L21.3438 22.8125L22.8125 21.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonOffIcon;
