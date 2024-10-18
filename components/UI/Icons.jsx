import React from "react";

const Icons = ({ type }) => {
  return (
    <div>
      {type === "education" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="64"
        >
          <circle cx="32" cy="32" r="32" fill="#6E07F3" />
          <g transform="translate(8, 10) scale(0.75)">
            <path
              fill="white"
              d="M32 2L2 16l30 14 30-14L32 2zM4 18.9V34h56V18.9L32 32 4 18.9zM46 36v7c0 4-4.5 6-14 6s-14-2-14-6v-7H46z"
            />
          </g>
        </svg>
      )}

      {type === "skills" && (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
       <circle cx="32" cy="32" r="32" fill="#6E07F3" />
       <g transform="translate(12, 12)">
         <path fill="white" d="M16 2a2 2 0 00-2 2v5H9a2 2 0 00-2 2v5h5v5a2 2 0 002 2h5v5a2 2 0 004 0v-5h5a2 2 0 002-2v-5h-5v-5a2 2 0 00-2-2h-5V4a2 2 0 00-2-2zm0 4h4v4h-4V6zM4 12h5v5H4v-5zm10 10v4h-4v-4h4zm10 0h4v4h-4v-4zm0-10h4v4h-4v-4z"/>
       </g>
     </svg>
     
      
      )}

      {type === "hobbies" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
        <circle cx="32" cy="32" r="32" fill="#6E07F3" />
        <g transform="translate(10, 10)">
          <path fill="white" d="M54.4 5.6a2.1 2.1 0 00-2.9 0L11.2 35.4a6.1 6.1 0 00-1.7 3.9v1.8a6.1 6.1 0 006.1 6.1h1.8a6.1 6.1 0 003.9-1.7l29.8-40.3a2.1 2.1 0 000-2.9L55.6 5.6zm-8.4 8.5l-9.5 9.5-5.7-5.7 9.5-9.5 5.7 5.7zm-9.5 9.5l-5.7 5.7-5.7-5.7 5.7-5.7 5.7 5.7zm-9.5 9.5l-5.7 5.7-5.7-5.7 5.7-5.7 5.7 5.7zm-8.5 8.5l-9.5 9.5-5.7-5.7 9.5-9.5 5.7 5.7z"/>
        </g>
      </svg>
      
      )}
    </div>
  );
};

export default Icons;
