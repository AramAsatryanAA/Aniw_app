import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";

function SignUpCredentialsPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <AuthInputItem
        id="username"
        label="Username"
        type="text"
        placeholder="Username"
      />
      <AuthInputItem
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
      />
      <AuthInputItem
        id="confirm-password"
        label="Confirm password"
        type="password"
        placeholder="Confirm password"
      />
      <Link href="/sign-up/user-info" className="button-blue-type">
        Continue
      </Link>
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

export default SignUpCredentialsPageContent;
