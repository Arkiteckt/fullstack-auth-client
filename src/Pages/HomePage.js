import {useAuth} from "../Hooks/Auth";


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
const HomePage = (props) => {
    const[message, setMessage] = useState("");
    const auth = useAuth();

    useEffect(()=>{
        // const fetchMessage = async () => {
        //     const headers = {
        //         "Content-Type": "application/json",
        //     }
        // }
		const response = await fetch(`${urlEndpoint}/users/message`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
            },
        });
    }, [auth.userToken]);
    
    
    return (
        <div>
        <h1> Fullstack Auth Home Page</h1>
        <h3>display the message</h3>
        </div>

    )
}
if (userToken !== null) {
	fetchMessage()
}
if (userToken === null) {
	setMessage("")
}
export default HomePage