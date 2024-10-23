import React from "react";

const Content = ({ children }) => {
  return (
    <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4">
      {children}
    </div>
  );
};

export default Content;
