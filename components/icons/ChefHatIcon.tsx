
import React from 'react';

const ChefHatIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 2a5 5 0 0 0-5 5v1.5a1.5 1.5 0 0 0 3 0V7a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 3 0V7a5 5 0 0 0-5-5Z" />
        <path d="M5 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
        <path d="M5 14h14v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z" />
    </svg>
);

export default ChefHatIcon;
