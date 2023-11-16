import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";
import SocialMediaLinksBlock from "@/components/UI/SocialMediaLinks-Block/SocialMediaLinksBlock";

function SignUpPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <AuthInputItem
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
      />
      <Link href="/sign-up/credentials" className="button-blue-type">
        Continue
      </Link>
      <div className="flex flex-col items-center gap-4 text-sm">
        <p className="font-medium">Or continue with</p>
        <SocialMediaLinksBlock />
      </div>
      <div className="text-center text-sm">
        <span className="font-medium">By signing up, you agree to</span>{" "}
        <Link
          href="#"
          className="text-custom-gray-700 transition-all hover:text-custom-gray-900"
        >
          Terms of Service
        </Link>{" "}
        &{" "}
        <Link
          href="#"
          className="text-custom-gray-700 transition-all hover:hover:text-custom-gray-900"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="text-center text-sm">
        <span className="font-medium">Already have an account?</span>{" "}
        <Link
          href="/login"
          className="text-custom-gray-700 transition-all hover:text-custom-gray-900"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default SignUpPageContent;
