import React from 'react';

export interface AudioFileIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AudioFileIcon = ({ size, ...props }: AudioFileIconProps) => {
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
        d="M14.5834 2.08337H6.25008C5.10425 2.08337 4.17716 3.02087 4.17716 4.16671L4.16675 20.8334C4.16675 21.9792 5.09383 22.9167 6.23966 22.9167H18.7501C19.8959 22.9167 20.8334 21.9792 20.8334 20.8334V8.33337L14.5834 2.08337ZM16.6667 13.5417H13.5417V17.448C13.5417 18.7396 12.4897 19.7917 11.198 19.7917C9.90633 19.7917 8.85425 18.7396 8.85425 17.448C8.85425 16.1563 9.90633 15.1042 11.198 15.1042C11.6772 15.1042 12.1251 15.25 12.5001 15.5V11.4584H16.6667V13.5417ZM13.5417 9.37504V3.64587L19.2709 9.37504H13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AudioFileIcon;
