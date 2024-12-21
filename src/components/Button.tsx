
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  onclick: () => void;
}

function Button({ children, onclick, color='primary' }: Props) {
  return (
    <button className={'my-2 btn btn-'+color} onClick={onclick}>{children}</button>
  )
}

export default Button