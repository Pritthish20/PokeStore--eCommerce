import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      // console.log(users)

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-[#5D6A49] px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-[#F7F3F3] text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button className=" bg-[#9CDE35] w-full text-[#3B3333] font-bold  px-2 py-2 rounded-lg" onClick={signup}>
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
