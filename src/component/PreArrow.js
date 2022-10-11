import Button from '@mui/material/Button';

function PreArrow(props) {
    const { disabled, className, style, onClick } = props;
    return (
        <Button  
            variant="text"
            className={className}
            style={{ ...style}}
            onClick={onClick}
            disabled = {disabled} 
        >
            <span className='arrow prev-icon'></span>
        </Button>
    );
  }

  export default PreArrow;