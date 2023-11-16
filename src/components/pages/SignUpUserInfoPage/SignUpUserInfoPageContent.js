import Link from "next/link";

import AuthInputItem from "@/components/UI/CustomElements/AuthInputItem";
import AuthSelectGenderItem from "@/components/UI/CustomElements/AuthSelectGenderItem";

function SignUpUserInfoPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <AuthInputItem
        id="full-name"
        label="Full name"
        type="text"
        placeholder="Full name"
      />
      <AuthInputItem
        id="birthday"
        label="Birthday"
        type="date"
        placeholder=""
      />
      <AuthSelectGenderItem />
      <Link href="/login" className="button-blue-type">
        Create account
      </Link>
    </div>
  );
}

export default SignUpUserInfoPageContent;
