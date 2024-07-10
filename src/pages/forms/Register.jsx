import { Link } from "react-router-dom";
import "./forms.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [books,setBooks]=useState([]);
  const [oldData,setOldData]=useState();
  console.log(oldData)
  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:4000/emails/${id}`);
  //   alert('Data deleted successfully');
  //   fetchBooks()
  // }
    
const dataEdit = async (id) => {
  
};


  const fetchBooks=async()=>{
            try{
                const response =await fetch('http://localhost:4000/emails')
                if(response.ok){
                    const booksData =await response.json()
                    setBooks(booksData)
                    
                }
            }
            catch(error){
                console.log(error)
            }
        }
        useEffect(()=>{fetchBooks()},[])

        

        const handleEdit = (id) => {
          const existingBook = books.find((r) => r.id === id);
         
            if (existingBook) {
              
              setOldData(existingBook)
              setEmail(existingBook.email)
              setUsername(existingBook.username)
              setPassword(existingBook.password)
              
            }
         
          
          
    };



          const formSubmitHandler =async (event) => {
    event.preventDefault();
   const NewData={ email, username, password };
    
            
  

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    else if (username.trim() === "") {
      return toast.error("Username is required");
    }

    else if (password.trim() === "") {
      return toast.error("Password is required");
    }else
    {
      await axios.post('http://localhost:4000/emails', NewData);
    alert('Data added successfully');
    fetchBooks()
    }

    console.log({ email, username, password });
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    
    <div className="form-wrapper">
      
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Register
        </button>
        
      </form>
      {oldData &&<button  onClick={() => dataEdit(oldData.id)}   >
          Edit
        </button>}
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
      <table>
    <thead>
        <tr>
            <th>email  ,</th>
            <th>Name   ,</th>
            <th>PW</th>
        </tr>
    </thead>
   
      {books.map(item =><tr key={item.id}>
        <td>{item.email}</td>
            <th>{item.username}</th>
            <th>{item.password}</th>
              <td><button onClick={() => handleDelete(item.id)}>Delete Data</button></td>
              <td><button onClick={() => handleEdit(item.id)}>Edit Data</button></td></tr>)}
              
</table>
    </div>
  );
};

export default Register;





// import { Link } from "react-router-dom";
// import "./forms.css";
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [newData, setNewData] = useState({});

//   const [books,setBooks]=useState([]);

  
  
//     const fetchBooks=async()=>{
//         try{
//             const response =await fetch('http://localhost:4000/emails')
//             if(response.ok){
//                 const booksData =await response.json()
//                 setBooks(booksData)
                
//             }
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
//     useEffect(()=>{fetchBooks()},[])

//   // Form Submit Handler
//   const formSubmitHandler =async (event) => {
//     event.preventDefault();
//     setNewData({name : {name},email: {email},password: {password} });
//     console.log(newData)
//     await axios.post('http://localhost:4000/emails', newData);
//     alert('Data added successfully');

//     if (email.trim() === "") {
//       return toast.error("Email is required");
//     }

//     if (name.trim() === "") {
//       return toast.error("Username is required");
//     }

//     if (password.trim() === "") {
//       return toast.error("Password is required");
//     }
    
//     setUsername("");
//     setEmail("");
//     setPassword("");
    
//   };
//   return (
//     <div className="form-wrapper">
     

  
//       <ToastContainer />
//       <h1 className="form-title">Create new account</h1>
//       <form onSubmit={formSubmitHandler} className="form">
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email"
//         />
//         <input
//           value={name}
//           onChange={(e) => setUsername(e.target.value)}
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//         />
//         <button className="form-btn" type="submit">
//           Register
//         </button>
//       </form>
//       <div className="form-footer">
//         Already have an account ?{" "}
//         <Link to="/login" className="forms-link">
//           Login
//         </Link>
        
//       </div>
     
//       {books.map(item =><div key={item.id}  ><div className="cart-item-book-title">
//               <div>{item.name}</div>
//               <div>{item.email}</div>
//               <div>{item.password}</div>
//             </div></div>)}
      
//     </div>
//   );
// };

// export default Register;
