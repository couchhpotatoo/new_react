import React from 'react'

function Card({username,textt}) {
    console.log(username);
    
  return (
   
      <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md mb-4" alt="" src="https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">{username}</span>
    <span class="font-medium text-sky-500">{textt}</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
    </div>
  )
}

export default Card
