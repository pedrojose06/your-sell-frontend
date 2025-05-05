import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'waku'

export const Header = () => {
  return (
    <header className="z-50 flex w-full items-center justify-between gap-4 bg-white p-6 shadow-md lg:fixed lg:top-0 lg:left-0">
      <Link to="/products">
        <img src="src/assets/pao.png" alt="Logo" className="h-12 w-14" />
      </Link>
      <div className="flex gap-8">
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/products">Produtos</Link>
        </h2>
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/about">Sobre a empresa</Link>
        </h2>
        <h2 className="font-bold text-lg tracking-tight">
          <Link to="/users-feedback">Avaliações dos usuários</Link>
        </h2>
      </div>
      <IoCartOutline className="h-8 w-8 cursor-pointer text-gray-700" />
    </header>
  )
}
