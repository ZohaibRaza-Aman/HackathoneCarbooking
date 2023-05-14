import "./Dynamictable.css";
const UserData = ({users})=>{
    return(
        <>
        {
            users.map((curUser)=>{
                const {id,name,email,company} = curUser;
                return(
                    <tr key={curUser.id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{company.name}</td>
                    </tr>
                )
            })
        }
        </>
    )
}
export default UserData;