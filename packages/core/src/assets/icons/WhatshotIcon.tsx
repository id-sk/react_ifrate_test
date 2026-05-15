import React from 'react';

export interface WhatshotIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WhatshotIcon = ({ size, ...props }: WhatshotIconProps) => {
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
        d="M14.0626 1.39062C14.0626 1.39062 14.8334 4.15104 14.8334 6.39062C14.8334 8.53646 13.4272 10.276 11.2813 10.276C9.12508 10.276 7.50008 8.53646 7.50008 6.39062L7.53133 6.01562C5.42716 8.51562 4.16675 11.7552 4.16675 15.276C4.16675 19.8802 7.89591 23.6094 12.5001 23.6094C17.1042 23.6094 20.8334 19.8802 20.8334 15.276C20.8334 9.66146 18.1355 4.65104 14.0626 1.39062ZM12.198 20.4844C10.3438 20.4844 8.84383 19.026 8.84383 17.2135C8.84383 15.526 9.93758 14.3385 11.7709 13.9635C13.6147 13.5885 15.5209 12.7031 16.5834 11.276C16.9897 12.6198 17.198 14.0365 17.198 15.4844C17.198 18.2448 14.9584 20.4844 12.198 20.4844Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WhatshotIcon;
