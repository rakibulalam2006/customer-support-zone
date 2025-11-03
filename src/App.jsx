import { Suspense } from "react";
import "./App.css";
import Footer from "./compunents/Footer";
import Navbar from "./compunents/Navbar";
import IssuesManagement from "./IssuesManagement";
 import { ToastContainer } from 'react-toastify';


const fetchIssues = async () =>{
  const result= await fetch("/data.json")
  return result.json();
}
function App() {
  const fetchPromise = fetchIssues();
  // console.log(fetchPromise);
  return (
    <>
      <div className="body">
        <Navbar />

       <Suspense fallback={<span className="flex items-center justify-center loading loading-ring loading-xl"></span>}>
        <IssuesManagement fetchPromise={fetchPromise}/>
       </Suspense>

        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
