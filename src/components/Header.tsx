type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Header = ({ searchTerm, setSearchTerm, handleSearch }: HeaderProps) => {
  return (
    <header className="bg-green-600 text-white p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Fruit&Vege Store</h1>
        <form onSubmit={handleSearch} className="w-full sm:w-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products...."
              className="w-full px-3 py-2 text-gray-700 border rounded-lg"
              value={searchTerm}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
