import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDismiss: () => void;
}
function Alert({ children, onDismiss }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children} You should check in on some of those fields below.
      <button type="button" onClick={onDismiss} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert