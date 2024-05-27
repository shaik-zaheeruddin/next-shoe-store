import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Spinner = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-black bg-opacity-30">
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Spinner;
