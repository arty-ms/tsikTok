import { Service } from 'typedi';

@Service('UtilsService')
export default class UtilsService {
  handlePaginationResult(result: any[]) {
    const isEmpty = result.length === 0
      || result[result.length - 1].totalCount === '0'
      || result[0].id === null;

    if (isEmpty) {
      return {
        result: [],
        totalCount: 0,
      };
    }

    return {
      result,
      totalCount: result[result.length - 1].totalCount,
    };
  }
}
