import Alert from '@mui/material/Alert';
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ActionAlerts({ onClose, caption, severity }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert
                variant="filled"
                severity={severity}
                onClose={() => { onClose(false) }}
            >
                {caption}
            </Alert>
        </Stack>
    );
}