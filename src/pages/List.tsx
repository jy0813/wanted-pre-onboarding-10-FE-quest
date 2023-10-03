import { getUser } from '@/apis/login';
import { useQuery } from '@tanstack/react-query';

export default function List() {
  const { data: userListData, isLoading } = useQuery(['userListData'], getUser);
  console.log(userListData);

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <div>
      <ul>
        {userListData.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}
