type ButtonProps = {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return(
    <button className="btn btn-primary">{label}</button>
  )
}

export default Button