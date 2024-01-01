import useLogout from '../../hooks/useLogout';

const ServicesPage = () => {
    const handleLogOutUser = useLogout();

    return (
        <>
            <div>ServicesPage</div>
            <button onClick={handleLogOutUser}>Log Out</button>
        </>
    )
}

export default ServicesPage;