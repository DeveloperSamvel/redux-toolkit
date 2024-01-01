import useLogout from '../../hooks/useLogout';

const HomePage = () => {
    const handleLogOutUser = useLogout();

    return (
        <>
            <div>HomePage</div>
            <button onClick={() => handleLogOutUser()}>Log Out</button>
        </>
    )
}

export default HomePage;