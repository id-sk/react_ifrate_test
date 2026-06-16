import React from 'react';

export interface SportsMotorsportsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SportsMotorsportsIcon = ({ size, ...props }: SportsMotorsportsIconProps) => {
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
      
<path d="M12.5016 11.8642C12.5016 11.1871 12.0954 10.583 11.4808 10.3226L5.66829 7.86423C4.12663 9.61423 3.25163 11.7184 2.75163 13.5413H10.8245C11.7516 13.5413 12.5016 12.7913 12.5016 11.8642Z" fill="currentColor"/>
<path d="M22.8766 11.6871C22.4495 7.0934 18.1266 3.88507 13.5225 4.18715C10.9079 4.35382 8.89746 5.16632 7.34538 6.31215L12.2829 8.4059C13.6683 8.99965 14.5745 10.3538 14.5745 11.8642C14.5745 13.9371 12.887 15.6246 10.8141 15.6246H2.30371C2.08496 16.9892 2.08496 17.9163 2.08496 17.9163V18.7496C2.08496 19.8955 3.02246 20.833 4.16829 20.833H14.585C19.4495 20.833 23.3454 16.6559 22.8766 11.6871Z" fill="currentColor"/>
    </svg>
  );
};

export default SportsMotorsportsIcon;
