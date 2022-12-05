import { NavLink } from 'react-router-dom';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <header className='flex items-center justify-between border-b p-2'>
      <div>
        <NavLink className='flex items-center' to='/' replace end>
          <BookmarkSquareIcon className='h-8' />
          <h1>Ys Index</h1>
        </NavLink>
      </div>
      <input
        className='h-8 w-32 rounded-lg border border-black p-2'
        placeholder='search'
      />
    </header>
  );
};
