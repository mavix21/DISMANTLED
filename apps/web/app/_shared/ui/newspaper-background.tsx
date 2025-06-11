export function NewspaperBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-5">
      {/* Scattered newspaper fragments */}
      <div className="absolute top-20 left-10 h-48 w-32 rotate-12 transform bg-white opacity-30">
        <div className="p-2 font-mono text-xs text-black">
          <div className="mb-1 border-b border-gray-400">
            FAKE NEWS DETECTED
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-3/4 bg-gray-400"></div>
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-1/2 bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-20 h-32 w-40 -rotate-6 transform bg-white opacity-20">
        <div className="p-2 font-mono text-xs text-black">
          <div className="mb-1 border-b border-gray-400">TRUTH VERIFIED</div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-2/3 bg-gray-400"></div>
            <div className="h-1 w-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4 h-52 w-36 rotate-45 transform bg-white opacity-15">
        <div className="p-2 font-mono text-xs text-black">
          <div className="mb-1 border-b border-gray-400">DISMANTLED</div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-5/6 bg-gray-400"></div>
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-3/4 bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-60 left-1/2 h-40 w-28 -rotate-12 transform bg-white opacity-25">
        <div className="p-2 font-mono text-xs text-black">
          <div className="mb-1 border-b border-gray-400">
            BLOCKCHAIN VERIFIED
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-1/2 bg-gray-400"></div>
            <div className="h-1 w-3/4 bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-1/3 bottom-20 h-36 w-44 rotate-8 transform bg-white opacity-10">
        <div className="p-2 font-mono text-xs text-black">
          <div className="mb-1 border-b border-gray-400">
            DECENTRALIZED TRUTH
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-4/5 bg-gray-400"></div>
            <div className="h-1 w-full bg-gray-400"></div>
            <div className="h-1 w-2/3 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewspaperBackground;
