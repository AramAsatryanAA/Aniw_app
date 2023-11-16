import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";
import SocialMediaLinksBlock from "@/components/UI/SocialMediaLinks-Block/SocialMediaLinksBlock";

function LoginPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <AuthInputItem
        id="username"
        label="Username"
        type="text"
        placeholder="Username"
      />
      <div className="flex flex-col gap-3">
        <AuthInputItem
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
        <Link
          href="/login/reset-password"
          className="self-start text-sm text-custom-gray-700 transition-all hover:text-custom-gray-900"
        >
          Forgot password?
        </Link>
      </div>
      <Link href="/" className="button-blue-type">
        Log in
      </Link>
      <div className="flex flex-col items-center gap-4 text-sm">
        <p className="font-medium">Or continue with</p>
        <SocialMediaLinksBlock />
      </div>
      <div className="text-center text-sm">
        <span className="font-medium">Don’t have an account?</span>{" "}
        <Link
          href="/sign-up"
          className="text-custom-gray-700 transition-all hover:text-custom-gray-900"
        >
          Sign up{" "}
        </Link>
      </div>
    </div>
  );
}

export default LoginPageContent;
