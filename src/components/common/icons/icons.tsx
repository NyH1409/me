import React from "react";
import { BiChevronDown, BiChevronUp, BiLogInCircle, BiSearch } from "react-icons/bi";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa6";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  like: (props: IconProps) => (
    <svg
      {...props}
      className="h-6 w-6 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring active:bg-gray-400 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M15 9.7h4a2 2 0 0 1 1.6.9 2 2 0 0 1 .3 1.8l-2.4 7.2c-.3.9-.5 1.4-1.9 1.4-2 0-4.2-.7-6.1-1.3L9 19.3V9.5A32 32 0 0 0 13.2 4c.1-.4.5-.7.9-.9h1.2c.4.1.7.4 1 .7l.2 1.3L15 9.7ZM4.2 10H7v8a2 2 0 1 1-4 0v-6.8c0-.7.5-1.2 1.2-1.2Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  dislike: (props: IconProps) => (
    <svg
      {...props}
      className="h-6 w-6 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring active:bg-gray-400 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M9 14.3H5a2 2 0 0 1-1.6-.9 2 2 0 0 1-.3-1.8l2.4-7.2C5.8 3.5 6 3 7.4 3c2 0 4.2.7 6.1 1.3l1.4.4v9.8a32 32 0 0 0-4.2 5.5c-.1.4-.5.7-.9.9a1.7 1.7 0 0 1-2.1-.7c-.2-.4-.3-.8-.3-1.3L9 14.3Zm10.8-.3H17V6a2 2 0 1 1 4 0v6.8c0 .7-.5 1.2-1.2 1.2Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  gitHub: () => (
    <button 
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#333] px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512">
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  </span>
</button>
  ),
  google: () => (
    <button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 488 512">
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  </span>
</button>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  bell: (props: IconProps) => (
    <svg
      className="h-6 w-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17.1 12.6v-1.8A5.4 5.4 0 0 0 13 5.6V3a1 1 0 0 0-2 0v2.4a5.4 5.4 0 0 0-4 5.5v1.8c0 2.4-1.9 3-1.9 4.2 0 .6 0 1.2.5 1.2h13c.5 0 .5-.6.5-1.2 0-1.2-1.9-1.8-1.9-4.2ZM8.8 19a3.5 3.5 0 0 0 6.4 0H8.8Z" />
    </svg>
  ),
  back: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  edit: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <BiSearch {...props}/>
  ),
  arrowDown: (props: IconProps) => (
    <BiChevronDown {...props}/>
  ),
  arrowUp: (props: IconProps) => (
    <BiChevronUp {...props}/>
  ),
  darkMode: (props: IconProps) => (
    <BsMoonFill {...props}/>
  ),
  lightMode: (props: IconProps) => (
    <BsSun {...props}/>
  ),
  french: (props: IconProps) => (
    <FaLanguage {...props}/>
  ),
  login: (props: IconProps) => (
    <BiLogInCircle {...props}/>
  ),
  facebook: ()=>(
    <button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#1877f2] px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 320 512">
      <path
        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  </span>
</button>
  ),
  social: ()=>(
    <>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#0077b5] px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512">
      <path
        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  </span>
</button>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-black px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512">
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  </span>
</button>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#128c7e] px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512">
      <path
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  </span>
</button>
    </>
  )
};