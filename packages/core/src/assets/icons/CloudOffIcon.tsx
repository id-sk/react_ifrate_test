import React from 'react';

export interface CloudOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudOffIcon = ({ size, ...props }: CloudOffIconProps) => {
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
      
<path d="M20.1562 9.41667C19.4479 5.82292 16.2917 3.125 12.5 3.125C10.9583 3.125 9.53125 3.57292 8.32292 4.34375L9.84375 5.86458C10.6354 5.44792 11.5417 5.20833 12.5 5.20833C15.6667 5.20833 18.2292 7.77083 18.2292 10.9375V11.4583H19.7917C21.5208 11.4583 22.9167 12.8542 22.9167 14.5833C22.9167 15.7604 22.25 16.7812 21.2917 17.3125L22.8021 18.8229C24.125 17.875 25 16.3333 25 14.5833C25 11.8333 22.8646 9.60417 20.1562 9.41667ZM3.125 4.44792L5.98958 7.30208C2.66667 7.44792 0 10.1771 0 13.5417C0 16.9896 2.80208 19.7917 6.25 19.7917H18.4687L20.5521 21.875L21.875 20.5521L4.44792 3.125L3.125 4.44792ZM8.05208 9.375L16.3854 17.7083H6.25C3.94792 17.7083 2.08333 15.8438 2.08333 13.5417C2.08333 11.2396 3.94792 9.375 6.25 9.375H8.05208Z" fill="currentColor"/>
    </svg>
  );
};

export default CloudOffIcon;
