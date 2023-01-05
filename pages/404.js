import React from 'react';
import Router from 'next/router';

export default function Custom404() {
  return (
    <>
      <div className="d-flex vh-100 vw-100 justify-content-center align-items-center ">
        <div className="row  text-center">
          <div className=" w-75 h-75 mx-auto">
         
          </div>

          <h4 className="mt-4 ff-secondary">Something is missing......</h4>
          <button
            className="mt-2 btn w-25 mx-auto"
            onClick={() => Router.push('/')}
          >
            Go back
          </button>
        </div>
      </div>
    </>
  );
}
