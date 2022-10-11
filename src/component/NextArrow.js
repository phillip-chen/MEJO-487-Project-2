import Button from '@mui/material/Button';

function NextArrow(props) {
    const { disabled,className, style, onClick } = props;
    return (
        <Button  
            variant="text"
            className={className}
            style={{ ...style}}
            onClick={onClick} 
            disabled = {disabled}
        >
            <span className='arrow next-icon'></span>
        </Button>
    );
  }

  export default NextArrow;