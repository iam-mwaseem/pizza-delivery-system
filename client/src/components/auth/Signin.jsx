import Form from "../../ui/Form";

export default function Signin() {
  return (
    <div>
      <Form
        isLogin={true}
        buttonText={"Login"}
        linkText={`Don't have an account?`}
        linkTo={"/app/signup"}
      />
    </div>
  );
}
