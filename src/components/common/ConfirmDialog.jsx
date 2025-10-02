import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function ConfirmDialog({ open, title = 'Confirm', content, confirmText = 'Confirm', cancelText = 'Cancel', onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      {content && (
        <DialogContent>
          <Typography variant="body2" color="text.secondary">{content}</Typography>
        </DialogContent>
      )}
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>{cancelText}</Button>
        <Button color="error" onClick={onConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
}
