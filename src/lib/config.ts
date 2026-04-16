import { ICalEventBusyStatus } from 'ical-generator';
import type { QueryDataSourceParameters } from '@notionhq/client/build/src/api-endpoints';

export default {
	// 필터 속성을 잠시 비활성화하여 모든 일정을 정상적으로 불러오는지 1차 테스트합니다.
	filter: undefined, 
	dateProperty: '날짜', // 실제 노션의 날짜 컬럼명으로 변경
	titleProperty: 'Name', // 실제 노션의 제목 컬럼명 (일치함)
	busy: ICalEventBusyStatus.FREE
} as {
	filter: Readonly<QueryDataSourceParameters['filter']> | undefined;
	dateProperty: Readonly<string>;
	titleProperty: Readonly<string>;
	busy: Readonly<ICalEventBusyStatus>;
};
