import AdminLink from "@/components/Admin/Navigation/AdminLink";

const AdminSelection = () => {

    const menus = [
        {name: "Projects", location: "projects"},
        {name: "Organisation for Project", location: "project-organisation"},
        {name: "Users", location: "users"}
    ];

    return (
        <div>
            <ul className={"flex justify-center"}>
            {menus.map((item) => (
                <AdminLink key={item.location} name={item.name} location={item.location}/>
            ))}
            </ul>
        </div>
    )
}

export default AdminSelection