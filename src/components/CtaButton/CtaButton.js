import './CtaButton.scss';

function CtaButton({ children, onClick, type = "primary" }) {
    return (
        <button className={`cta-button cta-button--${type}`} onClick={onClick}>
            {children}
        </button>
    );
}
export default CtaButton;