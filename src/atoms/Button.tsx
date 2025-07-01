type ButtonProps = {
  label: string
  href: string 
  type: string | null
}

const Button = ({ label, href }: ButtonProps) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return(
    <button className="btn btn-primary" onClick={handleClick}>{label}</button>
  )
}

export default Button