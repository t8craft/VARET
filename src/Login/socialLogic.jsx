function use_google() {
    // Redirect to the backend Google login endpoint
    window.location.href = "http://127.0.0.1:5000/auth/google";
}

export default use_google;




// import { useNavigate } from "react-router-dom";

// const use_google = async () => {
//     const navigate = useNavigate();

//     try {
//         // Simulate Google login logic
//         const response = await fetch("http://127.0.0.1:5000/social/google-login");
//         const data = await response.json();

//         if (response.ok) {
//             // Redirect to /landing_page with the user's name and email
//             navigate("/landing_page", { state: { name: data.name, email: data.email } });
//         } else {
//             console.error("Google login failed:", data.error);
//         }
//     } catch (error) {
//         console.error("Error during Google login:", error);
//     }
// };

// export default use_google;














// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// function use_google() {
//     const clientId = "YOUR_GOOGLE_CLIENT_ID";

//     return (
//         <GoogleOAuthProvider clientId={clientId}>
//             <GoogleLogin
//                 onSuccess={(response) => {
//                     console.log("Success:", response);
//                     fetch("http://127.0.0.1:5000/auth/callback", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify({ token: response.credential }),
//                     })
//                         .then((res) => res.json())
//                         .then((data) => console.log(data))
//                         .catch((error) => console.error(error));
//                 }}
//                 onError={() => console.log("Login Failed")}
//             />
//         </GoogleOAuthProvider>
//     );
// }

// export default use_google;
