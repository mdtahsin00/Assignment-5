import { useEffect, useState } from "react";
import type TechData from "./type";

const getTechData = async (): Promise<TechData[]> => {
  const res = await fetch("/data.json");
  return res.json();
};

export default function ExploreTech() {
  const [techs, setTech] = useState<TechData[]>([]);
  const [selectedTech, setSelectedTech] = useState<TechData | null>(null);
  const [stack, setStack] = useState<TechData[]>([]);
  const handleAddToStack = (tech: TechData) => {
    const exists = stack.find((item) => item.id === tech.id);

    if (exists) {
      alert("Technology already added!");
      return;
    }

    setStack([...stack, tech]);
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };
  useEffect(() => {
    getTechData().then((data) => {
      setTech(data);
      setSelectedTech(data[0]);
    });
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10 pb-6">
        <div className="pb-6">
          <p className="font-bold text-4xl pb-2">
            Explore the <span className="text-pink-400">Technologies</span>
          </p>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="flex justify-between gap-6 pt-6">
          <div>
            <div className="grid grid-cols-3 gap-6">
              {techs.map((tech) => (
                <div key={tech.id} onClick={() => setSelectedTech(tech)}>
                  <div className="rounded-[10px] border border-gray-200 p-5">
                    {/* name */}
                    <div>
                      <div className="flex justify-between pt-3">
                        <img
                          className="h-8"
                          src={tech?.icon}
                          alt="{tech?.icon}"
                        />
                        <p className="py-1 px-3 text-sky-500 bg-sky-100 rounded-full">
                          {tech?.badge}
                        </p>
                      </div>
                      <p className="text-[18px] font-bold pt-2 pb-2">
                        {tech?.name}
                      </p>
                      <p className="pb-5">{tech?.description}</p>
                    </div>
                    {/* rating */}
                    <div className="flex gap-6 pt-5 pb-3 items-center border-gray-200 border-t">
                      <p className="px-4 py-1 bg-gray-100 rounded-[10px]">
                        {tech?.category}
                      </p>
                      <p>{tech?.difficulty}</p>
                      <div className="flex gap-2 items-center">
                        <img className="h-3" src="/Container.png" alt="" />
                        <p>{tech?.rating}</p>
                      </div>
                    </div>
                    {/* button */}

                    <div className="pt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToStack(tech);
                        }}
                        disabled={stack.some((item) => item.id === tech.id)}
                        className={`rounded-[10px] w-full py-2 text-white ${
                          stack.some((item) => item.id === tech.id)
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-black"
                        }`}
                      >
                        {stack.some((item) => item.id === tech.id)
                          ? "✓ Added to Stack"
                          : "Add to Stack"}
                      </button>
                    </div>
                    {/* rank */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-80 border border-gray-200 rounded-2xl p-5  h-fit">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">Your Stack</h2>
                <p className="text-sm text-gray-500">
                  {stack.length} Technology Selected
                </p>
              </div>

          
            </div>

            {stack.length === 0 ? (
              <div className="text-center text-gray-400 py-10">
                No technologies selected yet.
              </div>
            ) : (
              <div className="space-y-3">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border rounded-lg p-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        className="w-10 h-10"
                        alt={item.name}
                      />

                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-lg pl-40"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
           
            <div className="text-center border  px-5 py-3 rounded-[10px] font-bold mt-15">
              {stack.length > 0 ? (
                <button
                  onClick={handleRemoveAll}
                  className="text-red-500 text-sm cursor-pointer "
                >
                  Remove All
                </button>
              ) : (
                <p className="text-gray-500 text-sm font-medium">
                  Your stack is empty.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
