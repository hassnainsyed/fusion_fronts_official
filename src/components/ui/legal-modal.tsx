import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LegalModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const LegalModal = ({ open, title, content, onClose }: LegalModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground whitespace-pre-line mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
