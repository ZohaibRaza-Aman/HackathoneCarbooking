import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function Home(){
    const navigate = useNavigate();

    // All Data Receive with parameter
    const Data = useSelector((a) => a);
    console.log({...Data});
    // Single Data Receive with parameter
    const Login = useSelector((a) => a.Login);
    const SignUp = useSelector((a) => a.SignUp);
    const Card = useSelector((a) => a.Card);
    console.log(Card,Login,SignUp);

    const moveToHome = () => {
        navigate("/about",{
            state: {
                id: 1,
                name: "ABC",
            },
        });
    };
    

    return(
        <>
        <div className="bg-dark  text-light rounded mt-5">
        <h1 className="text-center">Home</h1>
        </div>
        <div className="text-center"><button className="btn btn-primary mt-5 px-5 py-3"  onClick={moveToHome}>Click Me</button></div>
        </>
    )
};