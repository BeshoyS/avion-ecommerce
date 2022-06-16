import { FC, FormEvent } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  EmailSignUpContainer,
  EmailSignUpHeading,
  FormContainer,
} from "./EmailSignUp.styled";

const EmailSignUp: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("It's A Demo Website");
  };
  return (
    <EmailSignUpContainer>
      <EmailSignUpHeading>Join our mailing list</EmailSignUpHeading>
      <FormContainer>
        <Input type="email" placeholder={"your@email.com"} />
        <form onSubmit={handleSubmit}>
          <Button title="Sign up" color="dark" />
        </form>
      </FormContainer>
    </EmailSignUpContainer>
  );
};

export default EmailSignUp;
