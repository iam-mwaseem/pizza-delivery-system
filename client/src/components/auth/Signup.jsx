import Form from "../../ui/Form";

export default function Signup() {
  return (
    <div>
      <Form
        buttonText={"SignUp"}
        isSignup={true}
        linkText={`Already have an account?`}
        linkTo={"/app/signin"}
      />
    </div>
  );
}
