"use client";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin">
          <div
            className="h-full w-full rounded-full"
            style={{
              background: "linear-gradient(180deg, #9c54d5 0%, #5fe0f0 100%)",
              mask: "radial-gradient(transparent 60%, black 60%)",
              WebkitMask: "radial-gradient(transparent 60%, black 60%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
