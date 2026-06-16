import React from 'react';

export interface ContactMailIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContactMailIcon = ({ size, ...props }: ContactMailIconProps) => {
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
      
<path d="M21.875 8.33333V7.29167L18.75 9.375L15.625 7.29167V8.33333L18.75 10.4167L21.875 8.33333ZM22.9167 3.125H2.08333C0.9375 3.125 0 4.0625 0 5.20833V19.7917C0 20.9375 0.9375 21.875 2.08333 21.875H22.9167C24.0625 21.875 24.9896 20.9375 24.9896 19.7917L25 5.20833C25 4.0625 24.0625 3.125 22.9167 3.125ZM8.33333 6.25C10.0625 6.25 11.4583 7.64583 11.4583 9.375C11.4583 11.1042 10.0625 12.5 8.33333 12.5C6.60417 12.5 5.20833 11.1042 5.20833 9.375C5.20833 7.64583 6.60417 6.25 8.33333 6.25ZM14.5833 18.75H2.08333V17.7083C2.08333 15.625 6.25 14.4792 8.33333 14.4792C10.4167 14.4792 14.5833 15.625 14.5833 17.7083V18.75ZM22.9167 12.5H14.5833V6.25H22.9167V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default ContactMailIcon;
