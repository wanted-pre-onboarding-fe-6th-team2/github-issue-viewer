import { Avatar, List, styled, Typography, Box } from '@mui/material';

const ListWrap = styled(List)`
  flex-grow: 1;
`;
const ImageWrap = styled(Avatar)`
  width: 60px;
  height: 60px;
  border: 1px solid #e0e0e0;
  margin-right: 10px;
`;
const Text = styled(Typography)`
  display: inline-block;
  margin-right: 15px;

  svg {
    font-size: 14px;
    vertical-align: middle;
    margin-right: 2px;
  }
`;
const Contents = styled(Box)`
  line-height: 1.5;
  font-size: 0.95em;
  h3 {
    font-size: 1.1em;
    margin: 20px 0 10px;
    font-weight: bold;
    line-height: 1.4;
  }
  code {
    white-space: pre-wrap;
    word-break: break-all;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  blockquote {
    word-break: break-all;
    white-space: pre-wrap;
  }
`;

export { ListWrap, ImageWrap, Text, Contents };
