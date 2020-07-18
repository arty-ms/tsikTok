import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import { getClassName } from '../../../utils/ClassUtils';
import useStyle from './PaginationStyle';

const Pagination = (props) => {
  const {
    className,
    marginPagesDisplayed = 3,
    pageRangeDisplayed = 5,
    paginationOptions,
    onPaginationOptionsChange,
  } = props;

  const {t} = useTranslation();
  const classes = useStyle();
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  const onPageChange = (page) => {
    if (page.selected !== paginationOptions.page) {
      onPaginationOptionsChange({...paginationOptions, page: page.selected});
    }
  };

  return (
    <ReactPaginate
      previousLabel={t('PREVIOUS_PAGE')}
      nextLabel={t('NEXT_PAGE')}
      breakLabel={'...'}
      breakClassName={classes.break}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      initialPage={paginationOptions.page}
      forcePage={paginationOptions.page}
      pageCount={Math.ceil(
        paginationOptions.totalCount / paginationOptions.pageSize)}
      containerClassName={rootClasses}
      subContainerClassName={classes.subContainer}
      activeClassName={classes.active}
    />
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  paginationOptions: PropTypes.object,
  onPaginationOptionsChange: PropTypes.func,
};

export default Pagination;
