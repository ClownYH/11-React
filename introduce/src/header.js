import './header.css'

function Header(){

    const moveToLocate = id => {
        const locateId = document.getElementById(id);

        if(locateId){
            locateId.scrollIntoView({behavior:'smooth'});
        }
    }

    return (
        <>
        <header>
            <div className='title'>
                <button onClick={() => moveToLocate('welcome')}>
                    <span id='yuhwan'>YUHWAN</span><span> is here.</span>
                </button>
            </div>
            <div className='buttonList'>
                <button className='button' onClick={() => moveToLocate('about')}><p>어바웃.</p><p>About.</p></button>
                <button className='button' onClick={() => moveToLocate('skills')}><p>스킬.</p><p>Skills.</p></button>
                <button className='button' onClick={() => moveToLocate('projects')}><p>프로젝트.</p><p>Projects.</p></button>
                <button className='button' onClick={() => moveToLocate('contact')}><p>콘택트.</p><p>Contact.</p></button>
            </div>
            
        </header>
        </>
    )
}








export default Header;