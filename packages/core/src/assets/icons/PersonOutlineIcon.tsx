import React from 'react';

export interface PersonOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonOutlineIcon = ({ size, ...props }: PersonOutlineIconProps) => {
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
      
<path d="M12.5001 6.14567C13.7084 6.14567 14.6876 7.12484 14.6876 8.33317C14.6876 9.5415 13.7084 10.5207 12.5001 10.5207C11.2917 10.5207 10.3126 9.5415 10.3126 8.33317C10.3126 7.12484 11.2917 6.14567 12.5001 6.14567ZM12.5001 15.5207C15.5938 15.5207 18.8542 17.0415 18.8542 17.7082V18.854H6.14591V17.7082C6.14591 17.0415 9.40633 15.5207 12.5001 15.5207ZM12.5001 4.1665C10.198 4.1665 8.33341 6.03109 8.33341 8.33317C8.33341 10.6353 10.198 12.4998 12.5001 12.4998C14.8022 12.4998 16.6667 10.6353 16.6667 8.33317C16.6667 6.03109 14.8022 4.1665 12.5001 4.1665ZM12.5001 13.5415C9.71883 13.5415 4.16675 14.9373 4.16675 17.7082V20.8332H20.8334V17.7082C20.8334 14.9373 15.2813 13.5415 12.5001 13.5415Z" fill="currentColor"/>
    </svg>
  );
};

export default PersonOutlineIcon;
