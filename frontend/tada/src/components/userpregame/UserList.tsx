import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import BoxHeader from '../common/HeaderBox';

interface UserListItem {
	id: string;
	nick: string;
	imgNo: number;
}

interface UserListProps {
	users: UserListItem[] | null;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
	const currentUserId = useSelector((state: RootState) => state.user.userId);

	return (
		<>
			<div className='flex flex-col items-center w-full px-2 pt-4 pb-16 mt-2 bg-white2 '>
				{users && users.length > 0 ? (
					<BoxHeader total={0} num={users.length} title='참가자 수' />
				) : (
					''
				)}
				<div className='w-full mx-auto space-y-3 overflow-scroll ml-7 h-96'>
					{users && users.length > 0 ? (
						users
							.filter((user) => user.id !== currentUserId)
							.map((user) => (
								<div
									className='flex items-center w-5/6 h-16 px-2 font-bold bg-white shadow-lg rounded-2xl text-main'
									key={user.id}
								>
									<img
										className='w-10 h-10 ml-5 mr-3'
										src={require(`../../assets/images/avatar/avatar${user.imgNo.toString() || '1'}.png`)}
										alt=''
									/>
									<p className='text-lg font-bold'>{user.nick}</p>
								</div>
							))
					) : (
						<p>아직 다른 참가자가 없어요!</p>
					)}
				</div>
			</div>
		</>
	);
};

export default UserList;
