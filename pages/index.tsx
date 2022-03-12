import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="select-none cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>

      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>

      <input 
        type="file" 
        className="
          file:cursor-pointer 
          file:hover:text-purple-400 
          file:hover:bg-white
          file:hover:border    
          file:transition-colors 
          file:border-0 
          file:rounded-xl 
          file:p-2 
          file:text-white 
          file:bg-purple-400" 
        />

      <div className="first-letter:text-7xl first-letter:hover:text-purple-500">Lorem Ipsum is simply dummy text.</div>

    </div>
  );
}

export default Home