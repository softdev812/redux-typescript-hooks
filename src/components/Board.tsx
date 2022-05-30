import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchBoardData } from '../store/action-creator/board';

const Board: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.board);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetchBoardData());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  const users = data
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Board;