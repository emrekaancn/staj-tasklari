function UserInfo({me, isAdmin})    {
    return(
        <div>
            <h2>{me.name}</h2>
            <p>Role: {me.role}</p>
            {isAdmin && <p>Admin yetkisi var</p>}
        </div>
    );
}