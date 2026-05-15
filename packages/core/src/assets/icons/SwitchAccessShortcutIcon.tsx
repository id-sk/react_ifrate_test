import React from 'react';

export interface SwitchAccessShortcutIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchAccessShortcutIcon = ({ size, ...props }: SwitchAccessShortcutIconProps) => {
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
        d="M8.39591 9.31254L6.25008 8.33337L8.39591 7.35421L9.37508 5.20837L10.3542 7.35421L12.5001 8.33337L10.3542 9.31254L9.37508 11.4584L8.39591 9.31254ZM9.37508 21.875L10.3542 19.7292L12.5001 18.75L10.3542 17.7709L9.37508 15.625L8.39591 17.7709L6.25008 18.75L8.39591 19.7292L9.37508 21.875ZM5.59383 12.8855L4.16675 13.5417L5.59383 14.198L6.25008 15.625L6.90633 14.198L8.33341 13.5417L6.90633 12.8855L6.25008 11.4584L5.59383 12.8855ZM13.5417 12.5C13.5417 9.65629 14.6667 7.01046 16.4063 4.94796L13.5417 2.08337H20.8334V9.37504L17.8959 6.43754C16.5001 8.14587 15.6251 10.2917 15.6251 12.5C15.6251 15.9584 17.8126 19.125 20.8334 20.6459V22.9167C16.573 21.2605 13.5417 17.0313 13.5417 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwitchAccessShortcutIcon;
