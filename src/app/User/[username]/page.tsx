import UserDetailProvider from "@/Providers/UserDetailProvider";
import Header from "@/components/Navigation/Header";
import UserProfile from "@/components/UserProfile/UserProfile";
interface Props {
  params: {
    username: string;
  };
}
const page = ({ params }: Props) => {
  const { username } = params;
  return (
    <UserDetailProvider>
      <Header />
      <UserProfile UserName={username} />
    </UserDetailProvider>
  );
};

export default page;
