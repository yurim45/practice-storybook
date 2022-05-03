import { AnyAction } from 'redux';

// 액션 type
const ADD_USER_INFO = 'ADD_USER_INFO';
const CLEAR = 'CLEAR';

// 액션 생성 함수
export const getUserInfo = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: ADD_USER_INFO, payload: value });
	};
};

export const clear = () => {
	return (dispatch: any) => {
		dispatch({ type: CLEAR });
	};
};

// 상태를 위한 타입 선언
export type UserProps = {
	id: number;
	name: string;
	email: string;
};

// 초깃값 설정
const INITIAL_STATE: UserProps[] = [];

// 리듀서 구현
export const userInfo = (
	state: UserProps[] = INITIAL_STATE,
	action: AnyAction
): UserProps[] => {
	switch (action?.type) {
		case ADD_USER_INFO:
			const nextId = state?.length > 0 ? state?.length + 1 : 1;
			return [
				...state,
				{
					id: nextId,
					name: action?.payload?.name,
					email: action?.payload?.email,
				},
			];
		case CLEAR:
			return INITIAL_STATE;
		default:
			return state;
	}
};
