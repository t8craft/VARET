
const RightPanel = () => {
  return (
    <div className="bg-gray-100 w-2/12 h-screen overflow-y-auto flex-none sticky top-0 hidden lg:block">
      <div className="p-4 text-gray-600 text-xl font-light">
        <p className="bg-cyan-200 pt-1 pl-2 rounded-md">Other Content</p>

        <div className="ml-2 mt-3">
          <div className="h-24 bg-gray-600 mb-5 text-white p-2 rounded-lg"> Other 1</div>
          <div className="h-24 bg-gray-600 mb-5 text-white p-2 rounded-lg"> Other 2</div>
          <div className="h-24 bg-gray-600 mb-5 text-white p-2 rounded-lg"> Other 3</div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel