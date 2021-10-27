import { ChangeEvent } from "react";

export interface Props {
  disabled?: boolean,
  handleError?: () => boolean,
  label?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  defaultValue?: string,
  className?: string,
  fullWidth?: boolean
}
