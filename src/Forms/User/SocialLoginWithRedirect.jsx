import React from 'react'
import use_google from '../../Login/socialLogic'

const SocialLoginWithRedirect = () => {
  return (
    <div>

      <button
          onClick={() => use_google()}  // ✅ Calls the Google login function properly
          className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
      >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
               alt="Google Logo" 
               className="w-5 h-5 mr-2"
          />
             
            Sign in with Google

      </button>


    </div>
  )
}

export default SocialLoginWithRedirect



