import { Link } from 'waku'

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 lg:fixed lg:top-0 lg:left-0">
      <h2 className="font-bold text-lg tracking-tight">
        <Link to="/products">Produtos</Link>
      </h2>
      <h2 className="font-bold text-lg tracking-tight">
        <Link to="/about">Sobre a empresa</Link>
      </h2>
      <h2 className="font-bold text-lg tracking-tight">
        <Link to="/users-feedback">Avaliações dos usuários</Link>
      </h2>
    </header>
  )
}
