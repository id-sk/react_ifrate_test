import React from 'react';

export interface SpeakerNotesOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpeakerNotesOffIcon = ({ size, ...props }: SpeakerNotesOffIconProps) => {
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
      
<path d="M2.36454 1.04163L1.04163 2.36454L3.13538 4.45829L3.12496 22.1562L7.29163 17.9895H16.6666L22.6354 23.9583L23.9583 22.6354L2.36454 1.04163ZM9.37496 13.8229H7.29163V11.7395H9.37496V13.8229ZM7.29163 10.6979V8.61454L9.37496 10.6979H7.29163ZM21.875 1.32288H5.29163L11.4583 7.48954V5.48954H19.7916V7.57288H11.5416L12.5833 8.61454H19.7916V10.6979H14.6666L21.9479 17.9791C23.0625 17.9375 23.9583 17.0312 23.9583 15.9062V3.40621C23.9583 2.26038 23.0208 1.32288 21.875 1.32288Z" fill="currentColor"/>
    </svg>
  );
};

export default SpeakerNotesOffIcon;
