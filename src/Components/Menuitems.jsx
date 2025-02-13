import { MenuItems } from "../Data/MenuItems"
const Menuitems=()=>{
    console.log(MenuItems);
    return(
        <>
        <h1>Menu:</h1>
        <nav>
            <ol>
                {
                    MenuItems.map((value,index)=>{
                        return(
                            <>
                            <li key={value.id}><a href={value.path}>{value.name}</a></li>
                            </>
                        )
                    })
                }
            </ol>

        </nav>
        </>
    )
}
export default Menuitems