import style from './Preloader.module.sass'

export default function Preloader(){

    return(
        <div id="preloader">
            <div className={style.loader}>
                <span>S</span>
                <span>O</span>
                <span>U</span>
                <span>L</span>
                <span>&ensp;</span>
                <span>K</span>
                <span>I</span>
                <span>T</span>
                <span>C</span>
                <span>H</span>
                <span>E</span>
                <span>N</span>
            </div>
        </div>
    );
}