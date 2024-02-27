import { MdOutlineGames } from "react-icons/md";

export default function Loading() {
  return (
    <div className="loading-style flex items-center justify-center w-full ">
      <MdOutlineGames size={40} className="animate-spin" />
    </div>
  );
}
