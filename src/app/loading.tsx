import Image from "next/image";

// export default function Loading() {
// return (
//     <div className="flex justify-center items-center w-screen h-screen">
//         <Image
//             src='/loading-spinner.svg'
//             alt="loading spinner"
//             width={30}
//             height={30}
//         />
//     </div>
// )
// }

export default function Loading() {
  console.log("loading TOP LEVEL");
  return <h2>🌀 Loading...</h2>;
}
