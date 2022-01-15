import tailwindColors from "tailwindcss/colors";

export default function Home() {
  function hexToRgb(hex: string) {
    var match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return `${parseInt(match![1], 16)}, ${parseInt(match![2], 16)}, ${parseInt(
      match![3],
      16
    )}`;
  }

  function copyToClipboard(content: any) {
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const colors: [string, Record<number, string>][] = Object.entries(
    tailwindColors
  ).filter(
    ([key]) =>
      ![
        "current",
        "inherit",
        "transparent",
        "black",
        "white",
        "lightBlue",
        "warmGray",
        "trueGray",
        "coolGray",
        "blueGray",
      ].includes(key)
  );

  return (
    <div className="bg-gray-50 dark:text-gray-50 dark:bg-gray-900">
      <div className="p-4 mx-auto max-w-7xl sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8">
          {colors.map(([name, colors]) => (
            <div
              className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
              key={name}
            >
              <div className="w-16 font-semibold capitalize md:w-32 lg:w-64 shrink-0">
                {name}
              </div>
              <div className="grid flex-1 min-w-0 grid-cols-2 md:grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {Object.entries(colors).map(([name, hex]) => {
                  const rgb = hexToRgb(hex);
                  return (
                    <div key={hex} className="flex flex-col">
                      <div
                        className="w-full h-10 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800"
                        style={{ backgroundColor: hex }}
                      />
                      <div className="mt-1 px-0.5">
                        <div className="flex flex-row justify-between">
                          <div className="font-medium text-slate-900 2xl:w-full dark:text-white">
                            {name}
                          </div>
                          <button
                            onClick={() => copyToClipboard(hex)}
                            title="Copy to clipboard"
                          >
                            {hex}
                          </button>
                        </div>
                        <button
                          onClick={() => copyToClipboard(rgb)}
                          title="Copy to clipboard"
                        >
                          {rgb}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
