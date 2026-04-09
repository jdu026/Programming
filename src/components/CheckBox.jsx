export default function Checkbox(props) {
    const { children, id, ...rest } = props;
    return (
        <>
            <input type="checkbox" className="todo__check" name="" id={`chk-${id}`} />
            <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}
