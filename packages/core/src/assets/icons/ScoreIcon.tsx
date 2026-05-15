import React from 'react';

export interface ScoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScoreIcon = ({ size, ...props }: ScoreIconProps) => {
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
        d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM12.5 5.20833H14.0625V8.33333L16.1458 5.20833H17.9167L15.8333 8.33333L17.9167 11.4583H16.1458L14.0625 8.33333V11.4583H12.5V5.20833ZM7.29167 7.55208H9.89583V6.77083H7.29167V5.20833H11.4583V9.11458H8.85417V9.89583H11.4583V11.4583H7.29167V7.55208ZM19.7917 13.5417L13.5417 19.7917L9.375 15.625L5.20833 19.7917V17.1875L9.375 13.0208L13.5417 17.1875L19.7917 10.9375V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScoreIcon;
