import { LoggedInButton } from "../auth/LoggedInButton";
// import { SignInButton } from "../auth/SignInButton";

export const Header = async () => {
  return (
    <header className="flex items-center gap-4">
      <h1 className="font-bold text-lg flex-1"> get-testimonials.com</h1>
      <LoggedInButton />
    </header>
  );
};
