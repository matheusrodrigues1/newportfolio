import Image from "next/image";
import profile from "@/public/profile.jpeg"

const Information = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias inventore maiores corrupti voluptates consectetur temporibus, nulla dolores explicabo debitis, sapiente ullam perferendis voluptate hic illum optio velit autem distinctio quasi reiciendis adipisci fuga libero. Deserunt numquam assumenda accusantium doloribus obcaecati temporibus rem cupiditate, nam possimus nemo facilis esse laboriosam?</p>
        <Image src={profile} alt="profile"/>
      </div>
    </>
  );
}
 
export default Information;