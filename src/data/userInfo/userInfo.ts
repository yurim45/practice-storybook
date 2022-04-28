import { AnyAction } from 'redux';

// 액션 type
const ADD_USER_NAME = 'ADD_USER_NAME' as const;
const CLEAR = 'CLEAR' as const;

// 액션 생성 함수
export const getUserName = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: ADD_USER_NAME, data: value });
	};
};

export const clear = () => {
	return (dispatch: any) => {
		dispatch({ type: CLEAR });
	};
};

// 액션들의 타입스크립트 타입 준비
type UserAction = ReturnType<typeof getUserName> | ReturnType<typeof clear>;

// 상태를 위한 타입 선언
export type User = {
	id: number;
	name: string;
};

type UserState = User[];

// 초깃값 설정
const INITIAL_STATE: UserState = [];

// 리듀서 구현
export const userInfo = (
	state: UserState = INITIAL_STATE,
	action: AnyAction
): UserState => {
	switch (action?.type) {
		case ADD_USER_NAME:
			const nextId = state?.length > 0 ? state?.length + 1 : 1;
			return [...state, { id: nextId, name: action?.data }];
		case CLEAR:
			return INITIAL_STATE;
		default:
			return state;
	}
};
