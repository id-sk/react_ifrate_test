import React from 'react';

export interface CatchingPokemonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CatchingPokemonIcon = ({ size, ...props }: CatchingPokemonIconProps) => {
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
      
<path d="M15.1041 12.5002C15.1041 13.9377 13.9374 15.1043 12.4999 15.1043C11.0624 15.1043 9.89575 13.9377 9.89575 12.5002C9.89575 11.0627 11.0624 9.896 12.4999 9.896C13.9374 9.896 15.1041 11.0627 15.1041 12.5002ZM22.9166 12.5002C22.9166 18.2502 18.2499 22.9168 12.4999 22.9168C6.74992 22.9168 2.08325 18.2502 2.08325 12.5002C2.08325 6.75016 6.74992 2.0835 12.4999 2.0835C18.2499 2.0835 22.9166 6.75016 22.9166 12.5002ZM20.8333 12.5002H16.6666C16.6666 10.1981 14.802 8.3335 12.4999 8.3335C10.1978 8.3335 8.33325 10.1981 8.33325 12.5002H4.16659C4.16659 17.0939 7.90617 20.8335 12.4999 20.8335C17.0937 20.8335 20.8333 17.0939 20.8333 12.5002Z" fill="currentColor"/>
    </svg>
  );
};

export default CatchingPokemonIcon;
