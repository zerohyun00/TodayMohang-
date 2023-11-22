import tw from "tailwind-styled-components";

export const Header = tw.header`
  text-center
  font-semibold
  text-2xl
  leading-11
  tracking-tight
  mt-10 sm:mt-20 
  mb-14
`;

export const Form = tw.form`
  mx-auto
  w-96
  max-w-xs
  p-6
`;

export const Label = tw.label`
  mb-1 sm:mb-4 
  block
  text-left
  pb-2
  leading-loose
  cursor-pointer
  font-semibold
`;

export const Input = tw.input`
  rounded-lg
  border
  border-solid
  border-primary
  transition
  duration-80
  ease-out
  box-border
  my-0
  mb-4 sm:mb-5 
  w-full
  text-black
  bg-inputBg
  p-5
  h-11
  focus:border-highlight
  focus:shadow-outline
`;

export const Button = tw.button`
  mb-4 sm:mb-3 
  w-full
  max-w-full
  text-black
  bg-secondary
  text-lg
  hover:bg-primary
  hover:text-black
  font-extrabold
  h-11
  min-w-24
  px-4
  transition-all
  duration-80
  linear
  select-none
  outline-none
  cursor-pointer
  rounded-full
  rounded-lg // Apply rounded-lg
  border // Apply border
  shadow-md
  focus:shadow-outline
  focus:border-highlight

`;

export const Error = tw.div`
   flex
  items-center
  justify-center
  text-red-600
  my-2
  font-bold
  min-h-8 
`;

export const Success = tw.div`
  text-green-600
  font-bold
`;

export const LinkContainer = tw.p`
  text-sm
  text-gray-600
  my-2 sm:my-0 
  mx-auto
  mb-2
  w-64
  max-w-xs
  flex 
  items-center 
  justify-center
  

`;

export const Link = tw.a`
  no-underline
  font-semibold
  hover:underline
  cursor-pointer
`;
