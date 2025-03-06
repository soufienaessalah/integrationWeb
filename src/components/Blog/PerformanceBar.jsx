export default function PerformanceBar() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-xs p-2 flex justify-between items-center">
        <span>Improve performance by enabling hardware acceleration</span>
        <button className="text-white hover:text-gray-300">Learn more</button>
      </div>
    )
  }