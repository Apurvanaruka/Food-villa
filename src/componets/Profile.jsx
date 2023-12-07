import useUserinfo from "../utils/useUserinfo";

const Profile = () => {
    const userInfo = useUserinfo();
    return (
        <div className="flex m-5">
            <div>
                <img className="rounded-full w-44" src={userInfo?.avatar_url} alt="" />
            </div>
            <div className="ml-5">
                <h1>{userInfo?.message}</h1>
                <h2 className="text-4xl">{userInfo?.name}</h2>
                <h3>{userInfo?.bio}</h3>
                <h3>Follwers {userInfo?.followers}  Following {userInfo?.following}</h3>
                <h2>Location :-  {userInfo?.location}</h2>
                <h2>Company :- {userInfo?.company}</h2>
            </div>
            <div className="ml-5">
                <p>Public Repositries {userInfo?.public_repos}</p>
            </div>
        </div>
    );
}

export default Profile;