import React from 'react';

export interface MaleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MaleIcon = ({ size, ...props }: MaleIconProps) => {
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
        d="M9.89591 11.4582C11.9063 11.4582 13.5417 13.0936 13.5417 15.104C13.5417 17.1144 11.9063 18.7498 9.89591 18.7498C7.8855 18.7498 6.25008 17.1144 6.25008 15.104C6.25008 13.0936 7.8855 11.4582 9.89591 11.4582ZM9.89591 9.37484C6.72925 9.37484 4.16675 11.9373 4.16675 15.104C4.16675 18.2707 6.72925 20.8332 9.89591 20.8332C13.0626 20.8332 15.6251 18.2707 15.6251 15.104C15.6251 13.8957 15.2501 12.7811 14.6147 11.854L18.7501 7.729V10.4165H20.8334V4.1665H14.5834V6.24984H17.2709L13.1355 10.3853C12.2188 9.74984 11.1042 9.37484 9.89591 9.37484Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MaleIcon;
