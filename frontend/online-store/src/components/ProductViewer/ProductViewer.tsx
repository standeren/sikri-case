import classes from './ProductViewer.module.css';

type ProductViewerProps = {
    onClickLeftButton: () => void;
    onClickRightButton: () => void;
    disableRight: boolean;
    disableLeft: boolean;
    children: React.ReactNode;
}
export const ProductViewer = ({children, onClickRightButton, onClickLeftButton, disableRight, disableLeft}: ProductViewerProps) => {
    return <div className={classes.productViewerContainer}>
        <button className={classes.button} disabled={disableLeft} onClick={onClickLeftButton}>{'<'}</button>
        {children}
        <button className={classes.button} disabled={disableRight} onClick={onClickRightButton}>{'>'}</button>
    </div>
}