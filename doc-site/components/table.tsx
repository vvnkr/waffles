import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';

const wrapperStyle = css`
  margin-top: ${tokens.spacing.small};
`;

const tableStyle = css`
  border-collapse: separate;
  table-layout: fixed;
  border-spacing: 0;
  width: 100%;
`;

const tableCellStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  text-align: left;
  word-wrap: break-word;
  vertical-align: top;
  padding: ${tokens.spacing.medium};
  overflow: hidden;
`;

const tableHeadCellStyle = css`
  font-size: ${tokens.fontSizes.small};
  font-weight: ${tokens.fontWeights.bold};
  line-height: ${tokens.lineHeights.default};
  letter-spacing: ${tokens.letterSpacing.relaxed};
  text-transform: uppercase;
  border-top: 0;
`;

const tableBodyCellStyle = css`
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  background-color: ${tokens.colors.white};
  border-top: ${tokens.borderWidth.thin} solid
    ${hexToRgba(tokens.colors.navy, 0.15)};

  &:first-of-type {
    border-left: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
  }

  &:last-of-type {
    border-right: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
  }

  tr:first-of-type &:first-of-type {
    border-top-left-radius: ${tokens.borderRadius.medium};
  }

  tr:first-of-type &:last-of-type {
    border-top-right-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type &:first-of-type {
    border-bottom-left-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type &:last-of-type {
    border-bottom-right-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type & {
    border-bottom: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
  }
`;

type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

function TableHeadCell(props: TableCellProps) {
  return <th css={[tableCellStyle, tableHeadCellStyle]} {...props} />;
}

function TableCell(props: TableCellProps) {
  return <td css={[tableCellStyle, tableBodyCellStyle]} {...props} />;
}

type TableProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;

function Table({ children, ...restProps }: TableProps) {
  return (
    <div css={wrapperStyle}>
      <table css={tableStyle} {...restProps}>
        {children}
      </table>
    </div>
  );
}

Table.Cell = TableCell;
Table.HeadCell = TableHeadCell;

export default Table;
