import Form from "@/components/Form";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header label='Home' showBackArrou={false} />
      <Form placeholder="What's happenig" />
    </>
  )
}