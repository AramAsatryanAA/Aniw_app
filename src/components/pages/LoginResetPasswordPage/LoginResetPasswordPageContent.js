import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";

function LoginResetPasswordPageContent() {
  return (
    <div className="authentication-card-type">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-semibold">Reset password</h1>
        <p className="text-sm">
          Enter your email and we’ll send you instructions on how to reset your
          password.
        </p>
      </div>
      <AuthInputItem
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
      />
      <Link href="/login/new-password" className="button-blue-type">
        Send
      </Link>
      <div className="text-center text-sm font-medium">
        Don’t have an account?{" "}
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

export default LoginResetPasswordPageContent;
