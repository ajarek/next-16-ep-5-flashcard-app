// "use client"
// import { motion } from "framer-motion"
// import { useState } from "react"

// export default function FlipCard() {
//   const [flip, setFlip] = useState(true)

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <motion.div className='relative w-full h-[480px] flex items-center justify-center m-8 perspective-[1000px]'>
//         <motion.div
//           className='w-full h-full relative transform-3d'
//           transition={{ duration: 0.7 }}
//           animate={{ rotateY: flip ? 0 : 180 }}
//         >
//           {/* Front Side */}
//           <div className='absolute inset-0 w-full h-full bg-amber-300 rounded-2xl flex items-center justify-center backface-hidden border border-primary-foreground'>
//             <span className='text-2xl font-bold'>Front Side</span>
//           </div>

//           {/* Back Side */}
//           <div className='absolute inset-0 w-full h-full bg-amber-300 rounded-2xl flex items-center justify-center backface-hidden transform-[rotateY(180deg)] border border-primary-foreground'>
//             <span className='text-2xl font-bold'>Back Side</span>
//           </div>
//         </motion.div>

//         <button
//           onClick={() => setFlip((prevState) => !prevState)}
//           className='absolute top-4 right-4 z-10 bg-white/50 p-2 rounded-md hover:bg-white/80 transition-colors'
//         >
//           Click me
//         </button>
//       </motion.div>
//     </div>
//   )
// }
