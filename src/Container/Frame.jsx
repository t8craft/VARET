import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"

const Frame = () => {
  return (
    <div className="flex bg-blue-300 min-h-screen w-screen">
      <LeftPanel />

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Center Panel</h1>
        <p className="mt-2">This is the center panel content.</p>
      </div>

      <RightPanel/>

    </div>
  )
}

export default Frame  // ✅ This line is correct