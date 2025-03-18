/**
 * This is a file containing sample data for Alert components.
 * This file will be imported into the Alert.jsx file to render the interface.
 * You can change this sample data to display the interface as you like.
 */

import React from 'react';
import { Alert, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

/**
 * Import styles variables from styles.js file
 * This is the file that contains styles for each component.
 * You can view and edit in that file.
 * To see how to import and use styles, you can view in this file.
 */

export const alerts = [
    {
        title: 'Info Alert',
        description: 'Alert cơ bản với severity "info".',
        code: `<Alert severity="info">This is an informational message for your users.</Alert>`,
        preview: <Alert severity="info">This is an informational message for your users.</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Success Alert',
        description: 'Alert cơ bản với severity "success".',
        code: `<Alert severity="success">This is a success message!</Alert>`,
        preview: <Alert severity="success">This is a success message!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Warning Alert',
        description: 'Alert cơ bản với severity "warning".',
        code: `<Alert severity="warning">This is a warning message!</Alert>`,
        preview: <Alert severity="warning">This is a warning message!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Error Alert',
        description: 'Alert cơ bản với severity "error".',
        code: `<Alert severity="error">This is an error message!</Alert>`,
        preview: <Alert severity="error">This is an error message!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Dismissible Alert',
        description: 'Alert cho phép người dùng đóng thông báo (sử dụng IconButton với CloseIcon).',
        code: `
<Alert
  severity="info"
  action={
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  }
>
  This alert can be dismissed.
</Alert>
    `,
        preview: (
            <Alert
                severity="info"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                This alert can be dismissed.
            </Alert>
        ),
        category: 'Alerts'
    },
    {
        title: 'Filled Error Alert',
        description: 'Alert với variant "filled" và severity "error".',
        code: `<Alert severity="error" variant="filled">This is a filled error alert!</Alert>`,
        preview: <Alert severity="error" variant="filled">This is a filled error alert!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Outlined Warning Alert',
        description: 'Alert với variant "outlined" và severity "warning".',
        code: `<Alert severity="warning" variant="outlined">This is an outlined warning alert!</Alert>`,
        preview: <Alert severity="warning" variant="outlined">This is an outlined warning alert!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Custom Icon Alert',
        description: 'Alert với severity "success" sử dụng biểu tượng tùy chỉnh (CheckIcon).',
        code: `<Alert severity="success" icon={<CheckIcon />}>This is a success alert with a custom icon!</Alert>`,
        preview: <Alert severity="success" icon={<CheckIcon />}>This is a success alert with a custom icon!</Alert>,
        category: 'Alerts'
    },
    {
        title: 'Alert with Action Button',
        description: 'Alert với hành động button (ví dụ: UNDO) cho phép thực hiện các tác vụ bổ sung.',
        code: `
<Alert
  severity="info"
  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }
>
  This is an alert with an action button.
</Alert>
    `,
        preview: (
            <Alert
                severity="info"
                action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
            >
                This is an alert with an action button.
            </Alert>
        ),
        category: 'Alerts'
    },
    {
        title: 'Multi-line Alert',
        description: 'Alert hiển thị nội dung nhiều dòng.',
        code: `<Alert severity="info">
  This is an informational alert.
  It can display multi-line content.
</Alert>`,
        preview: (
            <Alert severity="info">
                This is an informational alert.<br />
                It can display multi-line content.
            </Alert>
        ),
        category: 'Alerts'
    }
];
