export default function HeroSection() {
  return (
    <section>
      <div className="pt-20 flex justify-between container mx-auto">
        <div>
          <h1 className="text-[60px] font-extrabold">
            Build Your Ideal <br />{" "}
            <span className="bg-linear-to-r bg-clip-text text-transparent from-orange-600 via-pink-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="pt-5 pb-5 text-[18px]">
            Explore frontend, backend, database, and tooling options, <br /> compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-5">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] py-2 px-3 rounded-[10px] text-white">
              Explore Technologies
            </button>
            <button className="border border-[#F1F5F9] rounded-[10px] py-2 px-10">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img
            className="mx-auto w-full max-w-lg"
            src="/public/assets/banner-stack.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
