import _ from 'lodash';
import { Service } from 'typedi';

@Service()
export default class UtilsService {
  public handlePaginationResult(result: any[]) {
    const isEmpty = result.length === 0
      || result[result.length - 1].totalCount === '0'
      || result[0].id === null;

    if (isEmpty) {
      return {
        result: [],
        totalCount: 0,
      };
    }

    const totalCount = _.get(result, `${result.length - 1}.totalCount`, 0);

    return {
      result,
      totalCount,
    };
  }
}
