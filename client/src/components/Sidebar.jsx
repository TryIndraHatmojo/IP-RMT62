export default function Sidebar() {
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      id="themelist"
      className="border-base-200 bg-base-100 w-80 shrink-0 overflow-x-hidden border-e border-dashed p-4 pb-20 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-scroll"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-title ms-2 font-semibold">Themes</h2>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-square btn-sm m-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>{" "}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 border-base-300 rounded-box z-1 w-48 border p-2 shadow-xl"
          >
            <li className="menu-title">Options</li>{" "}
            <li>
              <button className="text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-error size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>{" "}
                Remove my themes
              </button>
            </li>{" "}
            <li>
              <button className="text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-error size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>{" "}
                Reset daisyUI themes
              </button>
            </li>
          </ul>
        </div>
      </div>{" "}
      <ul className="menu w-full min-w-40 p-0">
        <li>
          <button className="btn group theme-generator-btn bg-auto px-2 svelte-e33zly">
            <svg
              className="size-5 origin-[40%_60%] [transition:rotate_.2s_ease] group-hover:-rotate-12"
              width={18}
              height={18}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
              <path
                d="M29.5856 18.4143L5.54395 42.4559"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
            </svg>{" "}
            <span className="font-normal">
              <span className="font-semibold">Hold</span> to add theme
            </span>
          </button>
        </li>{" "}
        <li className="menu-title mt-6">My themes</li>{" "}
        <div className="pointer-events-none flex items-center justify-center" />{" "}
        {/**/}{" "}
        <li>
          <button
            className=" gap-3 px-2 bg-base-content/10"
            style={{ scale: 1, opacity: 1 }}
          >
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.14 0.004 49.25)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.97 0.001 106.424)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.6 0.126 221.723)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.54 0.245 262.881)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.59 0.293 322.896)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">holywizard</div>
          </button>
        </li>
        {/**/} <li /> <li className="menu-title">daisyUI themes</li>{" "}
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.21 0.006 285.885)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.45 0.24 277.023)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.65 0.241 354.308)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.77 0.152 181.912)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">light</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.2533 0.016 252.42)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.97807 0.029 256.847)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.58 0.233 277.117)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.65 0.241 354.308)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.77 0.152 181.912)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">dark</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.97788 0.004 56.375)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.23574 0.066 313.189)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.85 0.138 181.071)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.89 0.061 343.231)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9 0.076 70.697)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">cupcake</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.85 0.199 91.936)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.75 0.183 55.934)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0 0 0)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">bumblebee</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.35519 0.032 262.988)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.76662 0.135 153.45)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.61302 0.202 261.294)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.72772 0.149 33.2)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">emerald</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.22389 0.031 278.072)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.58 0.158 241.966)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.55 0.046 257.417)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">corporate</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.15 0.09 281.288)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.78 0.115 274.713)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.71 0.202 349.761)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.82 0.111 230.318)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.75 0.183 55.934)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">synthwave</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.91637 0.034 90.515)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.41 0.112 45.904)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.8 0.114 19.571)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.92 0.084 155.995)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.68 0.162 75.834)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">retro</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.9451 0.179 104.32)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7422 0.209 6.35)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.8333 0.184 204.72)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7186 0.217 310.43)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">cyberpunk</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.97 0.014 343.198)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.52 0.223 3.958)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.65 0.241 354.308)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.62 0.265 303.9)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.82 0.111 230.318)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">valentine</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.21 0.006 56.043)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.84955 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7748 0.204 60.62)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.4598 0.248 305.03)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.648 0.223 136.073)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">halloween</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.92951 0.002 17.197)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.16961 0.001 17.32)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.6245 0.278 3.836)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.48495 0.11 355.095)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.56273 0.054 154.39)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">garden</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.2084 0.008 17.911)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.83768 0.001 17.911)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.68628 0.185 148.958)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.69776 0.135 168.327)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.70628 0.119 185.713)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">forest</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.37 0.146 265.522)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9 0.058 230.902)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.85661 0.144 198.645)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.60682 0.108 309.782)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.93426 0.102 94.555)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">aqua</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.15906 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.21455 0.001 17.278)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.26861 0 0)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">lofi</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9 0.063 306.703)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.89 0.058 10.001)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9 0.093 164.15)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">pastel</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.27807 0.029 256.847)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.3745 0.189 325.02)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.5392 0.162 241.36)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7598 0.204 56.72)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">fantasy</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.87 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.87 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.87 0 0)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">wireframe</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.87609 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.35 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.35 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.35 0 0)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">black</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.14076 0.004 285.822)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.75687 0.123 76.89)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(1 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.27581 0.064 261.069)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.36674 0.051 338.825)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">luxury</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.28822 0.022 277.508)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.97747 0.007 106.545)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.75461 0.183 346.812)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.74202 0.148 301.883)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.83392 0.124 66.558)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">dracula</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.71772 0.133 239.443)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.64476 0.202 359.339)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.94228 0.189 105.306)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">cmyk</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.95814 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.19162 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.40723 0.161 17.53)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.61676 0.169 23.865)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.73425 0.094 60.729)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">autumn</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.24353 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.8487 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.41703 0.099 251.473)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.64092 0.027 229.389)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.67271 0.167 35.791)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">business</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.98 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.719 0.357 330.759)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7337 0.224 48.25)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9278 0.264 122.962)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">acid</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.9871 0.02 123.72)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.19742 0.004 123.72)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.5892 0.199 134.6)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7775 0.196 111.09)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.8539 0.201 100.73)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">lemonade</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.20768 0.039 265.754)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.84153 0.007 265.754)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.75351 0.138 232.661)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.68011 0.158 276.934)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.7236 0.176 350.048)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">night</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.24 0.023 329.708)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.72354 0.092 79.129)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.71996 0.123 62.756)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.34465 0.029 199.194)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.42621 0.074 224.389)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">coffee</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.41886 0.053 255.824)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.5686 0.255 257.57)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.42551 0.161 282.339)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.59939 0.191 335.171)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">winter</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.30857 0.023 264.149)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.82901 0.031 222.959)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.86133 0.141 139.549)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.73375 0.165 35.353)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.74229 0.133 311.379)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">dim</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.95127 0.007 260.731)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.32437 0.022 264.182)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.59435 0.077 254.027)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.69651 0.059 248.687)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.77464 0.062 217.469)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">nord</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.22 0.019 237.69)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.77383 0.043 245.096)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.74703 0.158 39.947)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.72537 0.177 2.72)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.71294 0.166 299.844)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">sunset</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.98 0.016 73.684)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.4 0.123 38.172)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0 0 0)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2245 0.075 37.85)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.4644 0.111 37.85)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">caramellatte</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.2 0.08 209)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.9 0.076 70.697)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.92 0.2653 125)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.8327 0.0764 298.3)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.43 0 0)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">abyss</div>
          </button>
        </li>
        <li>
          <button className=" gap-3 px-2 ">
            <div
              className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              style={{ backgroundColor: "oklch(0.97 0.0035 67.78)" }}
            >
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.4 0.0081 61.42)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2327 0.0249 284.3)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2327 0.0249 284.3)" }}
              />{" "}
              <div
                className="size-1 rounded-full"
                style={{ backgroundColor: "oklch(0.2327 0.0249 284.3)" }}
              />
            </div>{" "}
            <div className="w-32 truncate">silk</div>
          </button>
        </li>
        {/**/}
      </ul>
    </div>
  );
}
