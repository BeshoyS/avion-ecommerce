import { FormEvent, FC, useState } from "react";
import Button from "./Button";

type Props = {
  inpStyle: string;
  btnStyle: string;
};

const NewsletterSignup: FC<Props> = ({ inpStyle, btnStyle }) => {
  const [email, setEmail] = useState<string>("");
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(email);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch ">
      <input
        type="email"
        placeholder="your@email.com"
        className={`${inpStyle} pl-6 flex-1`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button name="Sign up" style={btnStyle} btnType="submit" />
    </form>
  );
};

export default NewsletterSignup;
