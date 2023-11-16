import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";

function LoginNewPasswordPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">New password</h1>
      <AuthInputItem
        id="new-password"
        label="New password"
        type="password"
        placeholder="New password"
      />
      <AuthInputItem
        id="confirm-new-password"
        label="Confirm password"
        type="password"
        placeholder="Confirm New Password"
      />
      <Link href="/login" className="button-blue-type">
        Continue
      </Link>
      <div className="text-center text-sm">
        <spann className="font-medium">Already have an account?</spann>{" "}
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

export default LoginNewPasswordPageContent;
