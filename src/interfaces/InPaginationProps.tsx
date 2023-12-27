export interface PaginationProps {
  previous: string | undefined;
  next: string | undefined;
  onPrevious: () => void;
  onNext: () => void;
}
