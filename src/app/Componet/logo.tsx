import Link from "next/link"
 interface Log {
    id:number;
    imges:string;
    slug:string;        
}
const logs: Log[] = [
    {id:1, slug:"/", imges:"/foto2.jpg"}
]
function Logo() {
    return(
        <div className="flex justify-center items-center">
            <div className="p-[20px]">
                {logs.map((Log) =>(
                    <Link href={Log.slug} key={Log.id}>
                    <img
                    key={Log.id}
                    src={Log.imges}
                    alt={`mini${Log.id + 1}`}
                    className="w-[100px] h-[100px] rounded-[50%]"
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Logo