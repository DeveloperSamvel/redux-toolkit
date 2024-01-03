import useLogout from '../../hooks/useLogout';

const HomeContent = () => {
    const handleLogOutUser = useLogout();

    return (
        <>
            <div>HomePage</div>
            <button onClick={() => handleLogOutUser()}>Log Out</button>
        </>
    )
}

export default HomeContent;